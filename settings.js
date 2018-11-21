var constants = require("./constants")

exports.dbConfig = {
  server:"upappserver.database.windows.net",
  database: "up_app",
  user: "uplifted",
  password: "UP_lifted",
  port:1433
}

exports.HTTPport = 1337
exports.httpResponseFormat = constants.formats.json
