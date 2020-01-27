// ***  The environment variable from your .env file is now accessible in your source code
import "dotenv/config";

// ** Application-level middleware to add the CORS HTTP header to every request by default. 
import cors from "cors";
import express from "express";

import routes from './routes';
const axios = require('axios');
const app = express();

app.use(cors());

/*Express exposes this built-in middleware (based on (body-parser) under the covers) 
to transform two of the body types we might receive - json, and urlencoded.*/

//express.json(): Parses the text as JSON and exposes the resulting object on req.body.
app.use(express.json());
/* express.urlencoded(): Parses the text as URL encoded data (which is how browsers 
tend to send form data from regular forms set to POST) and exposes the resulting 
object (containing the keys and values) on req.body. */
app.use(express.urlencoded({ extended: true }));
// Each modular route receives a URI which in REST is our resource.
app.use('/users', routes.user);
app.use('/events', routes.event);


app.get("/", (req, res) => {
  res.send("Hello Express Server!");
});

app.listen(process.env.PORT, () => console.log(`Express Sever listening on port ${process.env.PORT}`));