
console.log("app beginning")
var http = require("http")
//require students controller
var building = require("../controllers/studentController")
settings = require("../settings")

var port =  process.env.PORT
console.log("port is " + port)
http.createServer(function (req, res) {
    switch(req.method){
        case "GET":
            
            if(req.url === '/'){
                 res.writeHead(200, "Home", {"Content-Type":"text/html"})
                 res.write("<html><head><title>500</title></head><body><h1>You home</h1><p>on the net</p></body></html>")
                res.end()
            } else if(req.url === '/getLibraries'){
                building.getLibraries(req,res)
            }else if(req.url === '/getDiningHalls'){
                building.getDining(req,res)
            }else if(req.url === '/getExamHalls'){
                building.getExamHalls(req,res)
            }else if(req.url === '/getKuduTerminals'){
                building.getKuduTerminals(req,res)
            }else if(req.url === '/getLectureHalls'){
                building.getLectureVenues(req,res)
            } else if (req.url === '/getPersonalBuildings'){
                building.getPersonalBuildings(req,res,1043882)
            }
            break

        case "POST":
            if(req.url === '/addPersonalBuilding'){
                building.addPersonalBuilding(req,res)
            } else if (req.url === '/verifyUser'){
                building.verifyUser(req,res)
            }
            break

        case "PUT":
            break

        case "DELETE":
            break

        default:
            console.log("request method not supported")
            break
    }

}).listen(port)
