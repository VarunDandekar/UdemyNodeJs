const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.write("<html>");
    res.write("<body><h1>Hey there</h1>");
    res.write(
      `<form action='createUser' method='POST'>
        <input type='text' name='username'>
        <button type=submit>submit</button>
      </form>`
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/users") {
    res.write("<html>");
    res.write("<body><h1>Users</h1>");
    res.write("<ul><li>user 1</li><li>user 2</li><li>user 3</li></ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/createUser" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const output = Buffer.concat(body).toString();
      console.log(output.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requestHandler;
