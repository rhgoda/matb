import express from "express"
import application from "./index.js"
import http from "http"
import https from  "https"

let app = express()

app.use(application)

http.createServer(app).listen(80);
http.createServer(app).listen(3000);
https.createServer({}, app).listen(443);

