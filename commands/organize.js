const fs=require("fs");  // fs module
const path=require("path");  // path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}
function organize(srcPath)
{  // to check scrPath is present
    if(srcPath==undefined)
    {
        srcPath=process.cwd();
    }
    //2. to create a directory-> organized_files
    let organizedFiles=path.join(srcPath,"organized_files");
    console.log("organized file folder path is ",organizedFiles);
    if(fs.existsSync(organizedFiles)==false)
    {
        
        fs.mkdirSync(organizedFiles);
    }
    else console.log("folder already exists");
    // 3.scan the entire srcPath(doenloads folder in this case)
     //Reads the contents of the directory.-> basically reads the names of files present in directory
    let allFiles=fs.readdirSync(srcPath)
    //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for(let i=0;i<allFiles.length;i++)
    {
        let fullPathOfFile=path.join(srcPath,allFiles[i]);
        console.log(fullPathOfFile);
        //1. check it is a file or folder
        let isThisAFile=fs.lstatSync(fullPathOfFile).isFile();
        console.log(allFiles[i]+" is "+isThisAFile);
        if(isThisAFile)
        {
            //1. get ext name
            let ext = path.extname(allFiles[i]).split(".")[1];
            //1.2 get foldername from extensions
            let folderName = getFolderName(ext);
            //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
            copyFileToDest(srcPath,fullPathOfFile,folderName);
        }
    }
}
function getFolderName(ext)
{
    for(let key in types)
    {
        for(let i=0;i<types[key].length;i++)
        {
            if(types[key][i]==ext)
            {
                return key;
            }
        }
}
return "miscellaneous";
}
function copyFileToDest(srcPath,fullPathOfFile,folderName)
{  // 1.To make folderName path
    let destFolderPath=path.join(srcPath,"organized_files",folderName);
    //2.check folder if exists, if it does not, then make folder
    if(!fs.existsSync(destFolderPath))
    {
        fs.mkdirSync(destFolderPath);
    }
    // 3. copy files from source folder to dest folder
    
    // return the last portion of file
    let fileName=path.basename(fullPathOfFile);
    let destFileName=path.join(destFolderPath,fileName);
    fs.copyFileSync(fullPathOfFile,destFileName);

}
// let srcPath="C:\\Users\\91931\\Desktop\\file\\downloads";
// organize(srcPath);

module.exports={
    organize:organize
}
