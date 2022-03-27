
module.exports = function(command) {
    require("child_process").execSync(command).toString();
}
