var fs = require('fs');
var path = require('path');



var filesList = [];
readFileList(path.resolve(__dirname, '../pattern'), filesList);
// console.log(filesList);

for (const filePath of filesList) {

    if (filePath.includes('.js')) {

        // 将要创建的文件内容
        const content = fs.readFileSync(filePath, 'utf8')
        // 要创建的文件名
        const fileName = filePath.split('/').filter((item) => /^[0-9]+/.test(item))[0];
        // 父级路径
        const faterPath = filePath.split(fileName)[0];
        // 写入文件
        fs.writeFileSync(path.resolve(filePath, fileName + '.js'), content);
        // 删除旧目录
        removeFileDir(path.resolve(faterPath + fileName))
    }
}

function removeFileDir(path) {
    var files = fs.readdirSync(path);
    for (let item of files) {
        var stats = fs.statSync(`${path}/${item}`);
        if (stats.isDirectory()) {
            removeFileDir(`${path}/${item}`)
        } else {
            fs.unlinkSync(`${path}/${item}`)
        }
    }
    fs.rmdirSync(path)
}

function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file,) => {
        var fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            readFileList(path.join(dir, file), filesList);
        } else {
            filesList.push(fullPath);
        }
    });
    return filesList;
}