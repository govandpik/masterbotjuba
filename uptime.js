let express = require("express"),
    http = require('http'),
    app = express();
app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendstatus(200);
});

let listener = app.listen(process.env.PORT, function(){
  console.log("your app listening on port " + listener.address().port);
});

setInterval(() =>{
  http.get(`http://${process.env.PORJECT.DOMAIN}.glitch.me/);
}

);