import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import pg from "pg";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async(req, res) => {

  try {
    const result = await db.query("SELECT * FROM list ORDER BY id ASC");
    items = result.rows;
  
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch(err){
    console.log(err);
  }
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO list (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch(err){
    console.log(err);
  }
});

app.post("/edit", async(req, res) => {
  const item = req.body.updatedItemTitle;
  const id   = req.body.updatedItemId;

  try {
      await db.query("UPDATE list SET title = ($1) WHERE id = $2 " ,[item,id]);
      res.redirect("/");
  }catch(err){
    console.log(err);
  }
});

app.post("/delete", async(req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM list WHERE id=$1",[id]);
    await db.query("ALTER SEQUENCE list_id_seq RESTART WITH 1;");
    res.redirect("/");

  }catch(err){
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
