var constants = require("./constants")

exports.dbConfig = {
  server:"localhost\\MSSQLSERVER",
  database: "up_app",
  user: "uplifted",
  password: "uplifted",
  port:1433
}

exports.HTTPport = 1337
exports.httpResponseFormat = constants.formats.json
