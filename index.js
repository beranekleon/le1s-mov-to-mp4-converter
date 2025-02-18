//aimport needed modules
const fs = require("fs-extra");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg"); //module needed to control FFmpeg

ffmpeg.setFfmpegPath(path.join(__dirname, 'ffmpeg', 'bin', 'ffmpeg.exe'));

//define input and output folders
const inputFolder = path.join(__dirname, "input"); 
const outputFolder = path.join(__dirname, "output"); 

const files = fs.readdirSync(inputFolder); //read all files from input folder

//convert files
files.forEach(file => {
    const inputPath = path.join(inputFolder, file); //path to the .MOV-file
    const outputPath = path.join(outputFolder, file.replace(".mov", ".mp4")); //path to the output as a .MP4-file
  
    ffmpeg(inputPath) //start FFmpeg
      .output(outputPath)
      .run(); //start converting
  });