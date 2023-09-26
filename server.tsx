import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/App"; // Ваш React-компонент

const server = express();

server.get("/", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script src="/client-bundle.js"></script>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
