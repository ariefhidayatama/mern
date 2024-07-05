// const express = require('express')
// const app = express()

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js";

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello wordl")
})

app.use('/api',router)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})