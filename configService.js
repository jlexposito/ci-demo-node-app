// configService.js
// ========
fs = require('fs');

module.exports = {
    readConfiguration: function(envKey, file) {
        var path = "conf/" + envKey + "/" + file;
        console.log("Reading file " + path);
        return fs.readFileSync(path, 'utf8');
    }
};