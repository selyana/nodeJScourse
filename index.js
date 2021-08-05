const fs = require("fs")
const stream = require("stream")

ipAddress1 = /89.123.1.41/
ipAddress2 = /34.48.240.111/

readStream = fs.createReadStream("access.log", {
    encoding: "utf-8",
    highWaterMark: 16*1024
})

writeStream1 = fs.createWriteStream("89.123.1.41_request.log", {
    flags: "a",
    encoding: "utf-8",
})

writeStream2 = fs.createWriteStream("34.48.240.111_request.log", {
    flags: "a",
    encoding: "utf-8",
})


readStream.on("data", (chunk) => {
    let arr = chunk.split("\n")
    arr.forEach((item) => {
        if (ipAddress1.test(item)) writeStream1.write(item + "\n");
        if (ipAddress2.test(item)) writeStream2.write(item + "\n");
    });
})

readStream.on("end", () => {
    console.log('process complete')
})





