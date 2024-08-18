import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 3000;
const task = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
 
app.get('/', (req, res) => {
  res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
  if (req.body.fname){
    task.push(req.body.fname);

  }
  
  res.render("index.ejs",{task});
  console.log(task);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 