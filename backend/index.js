const express = require("express")
const cors = require("cors")

const products = require("./products")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (request, res) => {
    res.send("welcome to our online shop api")
})

app.get("/products", (request, res) => {
    res.send(products)
})

const port = process.env.PORT || 5000;

app.listen(port, console.log("server is runing on port:", port))