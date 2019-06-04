var fs = require("fs");
var os = require("os");
var path = require("path");

function loadSetting() {
    try {
        var homeDir = path.join(os.homedir(),".innostudio");
        if(!fs.existsSync(homeDir)){
            fs.mkdirSync(homeDir);
        }
        
        var settingPath = path.join(homeDir,"settings.json")

        if(fs.existsSync(settingPath)){
            var jsonStr = fs.readFileSync(settingPath).toString();
            return JSON.parse(jsonStr);
        }
        else{
            return {};
        }
        
    } catch (error) {
        
    }
}

var setting = loadSetting();

console.log(setting);

addonPath=[path.join(__dirname,"./../tmp")];


function getAddons(){
    var addons = [];
    this.addonPath.forEach(function(d){
        findAddons(d,addons);
    });
    return addons;
}

function findAddons(filePath, addons){
    if(!fs.existsSync(filePath)){
        return;
    }

    var files = fs.readdirSync(filePath);
    files.forEach(function(filename){
        var filedir = path.join(filePath, filename);
        var stats = fs.statSync(filedir);
        var isFile = stats.isFile();
        var isDir = stats.isDirectory();
        if (isFile) {
            //@ts-ignore
            var data = []
            if (filename == "addon.js") {
                try {
                    data = require(filedir);

                    if (data && data.length) {
                        data.forEach(function (d) {
                            addons.push(d)
                        })
                    }
                } catch (ex) {
                    console.log('load asson js error');
                    console.log(ex);
                }
            }
        }
        if (isDir) {
            findAddons(filedir, addons);
        }
    })
}

var addons = getAddons();
console.log(addons);