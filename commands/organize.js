const fs=require("fs");
const path=require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}
function organize(srcPath)
{
    if(srcPath==undefined)
    {
        srcPath=process.cwd();
       //console.log("source path is",srcPath);
    }
    //2. to create a directory-> organized_files
    //let organizedFiles = srcPath + "/" + "organized_files";
    let organizedFiles=path.join(srcPath,"organized_files");
    console.log("organized file folder path is ",organizedFiles);
    // if(fs.existsSync(organizedFiles)==false)
    // {
    //     
    //     fs.mkdirSync(organizedFiles);
    // }
    // else console.log("folder already exists");
    // // 3.scan the entire srcPath(doenloads folder in this case)
    //  //Reads the contents of the directory.-> basically reads the names of files present in directory
    // let allFiles=fs.readFileSync(srcPath);
    // console.log(allFiles);
    // //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    // for(let i=0;i<allFiles.length;i++)
    // {
    //     let ext=path.extname(allFiles[i]);
    //     console.log(ext);
    // }


}
let srcPath="C:\Users\91931\Desktop\file\downloads";
organize(srcPath);

