import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-Parser';


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const data = "Raymond";


function loadData(a) {
    console.log(a);
}


app.get("/", function(req, res){

    loadData("TEST");
    res.render("home", {content: data});
});


// app.post("/compose", function (req, res) {
//   const post = {
//     title: req.body.postTitle,
//     content: req.body.postBody,
//   };

//   posts.push(post);

//   res.redirect("/");
// });



app.listen(3000, function(){
    console.log("listening on Port 3000");
});