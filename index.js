const http = require("http");
const fs = require("fs");
const PORT = 8000;

const server = http.createServer((req, res) => {
  const dateObject = new Date();

  const date = `0${dateObject.getDate()}`.slice(-2);

  const month = `0${dateObject.getMonth() + 1}`.slice(-2);

  const year = dateObject.getFullYear();

  const hours = dateObject.getHours();

  const minutes = dateObject.getMinutes();

  let fileName = `${year}-${month}-${date} ${hours}.${minutes}`;
  let data = Date.now();

  fs.writeFile(`${fileName}.txt`, `${data}`, (error) => {
    if (error) {
      console.log(error);
    }
  });

  fs.readFile(`${fileName}.txt`, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log("server is running on port " + PORT));
