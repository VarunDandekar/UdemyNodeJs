const fs = require("fs");
const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='msg'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log("chunk", chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("body", parsedBody);
      const msg = parsedBody.split("=")[1];
      fs.writeFile("message.txt", msg, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hay</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
