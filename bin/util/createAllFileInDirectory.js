
// 아직 테스트 안해봄. 
const createAllFileInDirectory = function(path, fileNames) {
    const fs = require("fs");

    fs.readdirSync(path).forEach(function(file, index) {
        const template = require(path + file);
        fs.writeFileSync('./' + fileNames[index], template);
    })
}

module.exports = createAllFileInDirectory;