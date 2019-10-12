const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());

// app.post("/api/contact", (req, res) => {
//   const { body } = req;

//   console.log(body);
//   res.json({
//     success: 200
//   });
// });

app.get("/", (req, res) => {
  res.json({
    success: true
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
