const express = require('express')
const app = express()
app.use(express.json());

const port = 3001
const mongoose = require("mongoose");
const Router = require("./routes")
const create = require("./models/models");
const fs = require('fs')

const username = "roushan";
const password = "9431500";
const cluster = "cluster0.75lbm";
const dbname = "myFirstDatabase";

mongoose.connect(
    `mongodb+srv://roushan:${password}@cluster0.75lbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
);
const router = express.Router();
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

router.post('/create', function(req, res){
  res.send({
      type: 'POST',
      Current_sales: req.body.Current_sales,
      Target_sales: req.body.Target_sales,
      ID: req.body.id,
      Progress_per: req.body.progress_per,
      Bar_colour: req.body.Bar_colour,
      Category_name: req.body.Category_name,
      Progress_label: req.body.Progress_label
  });
});

app.get('/', (req, res) => {
  res.end('Hello World!');
});

// app.get("/list_movies", (req, res) => {
//     fs.readFile(__dirname + '/' + 'movies.json', 'utf8', (err, data) => {
//         res.end(data);
//     });
// });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

module.exports = router;