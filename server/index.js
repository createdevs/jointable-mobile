// ***  The environment variable from your .env file is now accessible in your source code
import "dotenv/config";
import express from "express";

const app = express();
app.listen(process.env.PORT, () => console.log(`Express Sever listening on port ${process.env.PORT}`));