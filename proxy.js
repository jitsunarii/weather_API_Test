const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get(
      "http://weather.livedoor.com/forecast/rss/area/400010.xml"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
