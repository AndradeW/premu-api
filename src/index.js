import app from "./app.js";
import connectDB from "./db/db.js";

connectDB();

app.get("/", (req, resp) => {
  resp.send("Hello world");
});

app.listen(3000);
console.log("Server on port: ", 3000);
