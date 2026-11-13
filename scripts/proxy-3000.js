const http = require("node:http");

const server = http.createServer((req, res) => {
  const options = {
    hostname: "127.0.0.1",
    port: 3042,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      host: "127.0.0.1:3042",
    },
  };
  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });
  req.pipe(proxyReq, { end: true });
  proxyReq.on("error", () => {
    res.writeHead(502);
    res.end("Bad Gateway");
  });
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Port 3000 forwarding to 3042 active on 0.0.0.0:3000");
});
