var workstation = {
    name: "main",
    author: "",
    description: "",
    dirName: __dirname,
    manifest: {
        name: "",
        version: "1.0"
    },
    env: {
        root: "/",
        workstation: "/workstation"
    },

    runtimes: [{
        imports: [{
            name: "Object",
            type: "Builder",
            object: "InnoMind.ObjectBuilder",
            attachAddonAs: "addon"
        }]
    }],

    extensions: [
        {
            path: "/workstation/node/services",
            items: [{
                builder: "Object",
                id: "httpServer",
                object: "InnoMind.HttpServer",
                port: "13112"
            }]
        },
        {
            path: "/workstation/node/services/httpService/routers",
            items: [
            {
                id: "runtime-api",
                object: "InnoMind.RuntimeApi",
                url: "/runtimes"
            },
            {
                id: "sourcemaps",
                builder: "Object",
                object: "InnoMind.StaticFolder",
                url: "/sourcemaps",
                path: "./../sourcemaps"
            },
            {
                id: "service-api",
                object: "InnoMind.WorkstationServiceApi",
                url: "/service/api"
            }]
        }
    ]
}

var addons = [];
addons.push(workstation);
module.exports = addons;