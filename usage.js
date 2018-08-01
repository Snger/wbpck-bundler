const bundle = require('./index')
const fs = require('fs');
const entry = __dirname + '/example/entry.js'

var bundleString = bundle(entry)
fs.writeFile("./build/bundle.js", bundleString, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!")
})
