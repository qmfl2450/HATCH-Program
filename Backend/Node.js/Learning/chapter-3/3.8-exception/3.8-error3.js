const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abcderg.js')
}, 1000);