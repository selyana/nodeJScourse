const fs = require("fs/promises")
const { lstatSync, fchmod } = require("fs")
const { join } = require("path")
const inquirer = require("inquirer")

let currentDir = process.cwd()
const isFile = async (path) => (await fs.lstat(path)).isFile()

class listItem {
    constructor(path) {
        this.path = path
    }

    get isDir() {
        return lstatSync(this.path).isDirectory()
    }
}

const run = async () => {
    const list = await fs.readdir(currentDir)
    const items = list.map(filename => new listItem(join(currentDir, filename), filename))

const item = await inquirer.prompt([{
    name: "fileName",
    type: "list",
    message: `Choose: ${currentDir}`,
    choices: item.map(item => ({
        name: item.filename,
        value: item
    }))
}]).then(answer => answer.fileName)

if (item.isDir){ 
    currentDir = item.path
    return await run()
} else {
    const data = await fs.readFile(item.path, "utf-8")
    if (options.p === null) {
        console.log(data)
    } else {
        const lines = data.split("\n")
        lines.filter(line => new RegExp(options.p).test(line)).forEach(console.log)
    }
}

} 

run()