const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const path = require('path');
const app = express();


app.use(express.json({limit:"50mb"}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(fileUpload());
app.use(cors());


// Import All Routers
const userRouters = require("./routers/userRouters");
const dashboardRouters = require("./routers/dashboardRouters");
const lessonRouters = require("./routers/lessonRouters");
const highlightRouters = require("./routers/highlightsRouters");
app.use("/api/v1",userRouters)
app.use("/api/v1",dashboardRouters);
app.use("/api/v1",lessonRouters);
app.use("/api/v1",highlightRouters);


// Middleware Errors
const middlewareErrors = require("./middlewares/error");
app.use(middlewareErrors)

// Frontend Connect to Backend
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
})

module.exports = app;