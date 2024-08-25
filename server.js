const express = require("express");
const app = express();
const port = 3008;

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
