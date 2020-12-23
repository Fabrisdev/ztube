const express = require("express")
const cors = require("cors")
const ytdl = require("ytdl-core")
const app = express()

app.use(cors())
app.set("views", __dirname, "/views")
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "css/background.css")
})
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "css/button.css")
})
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "css/text.css")
})
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "css/video.css")
})

app.get("/download", function(req,res){
    var URL = req.query.URL
    res.header("Content-Disposition", 'attachment; filename="video.mp4"')

    ytdl(URL, {
        format: "mp4"
        }).pipe(res)
})

app.get("/*", function(req,res){
  res.redirect("/")
})

app.listen(4000, function(){
    console.log("Server running at port 4000")
})