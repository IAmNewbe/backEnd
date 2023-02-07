const fs = require("fs");

const writableStream = fs.createWriteStream('output.txt');

writableStream.write("Hello my name is hikam \n");
writableStream.write("this is my first readeble stream");

writableStream.end();