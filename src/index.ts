import express from "express";
import { logger } from "./main";
const app = express();
app.get("/", (req, res) => {
  res.send(`
  <h1>Home Page</h1>
  <a href="/about">About Us</a>
  `);
});
app.get("/about", (req, res) => {
  logger();
  res.send(`
  <h1>About Page</h1>
  <a href="/">Home</a>
  `);
});
app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
