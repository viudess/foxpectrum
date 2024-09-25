"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const server_1 = require("./src/server");
const app = express();
const server = new server_1.default(app);
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.listen(port, 'localhost', function () {
    console.info(`Server running on : http://localhost:${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('server startup error: address already in use');
    }
    else {
        console.log(err);
    }
});
//# sourceMappingURL=server.js.map