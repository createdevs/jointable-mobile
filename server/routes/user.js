import { Router } from "express";
const axios = require("axios");
const { parseString } = require('xml2js');
const router = Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get("/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

router.get("/collection/:bbgUsername", (req, res) => {
  //  we're going to take that requests value and make an API request to
  //  BoardGame Geeks for the User's collection
  const { bbgUsername } = req.params;
  const url = `https://www.boardgamegeek.com/xmlapi2/collection?username=${bbgUsername}&subtype=boardgame&own=1`;

  const headers = {
      'User-Agent': 'amber.j.nola@gmail.com',
      Accept: '*/*',
      'Cache-Control': 'no-cache',
      Host: 'www.boardgamegeek.com',
      'Accept-Encoding': 'gzip, deflate',
      Connection: 'keep-alive',
      'cache-control': 'no-cache',
    };
  // this is the url route to boardgamegeeks API request for a users collection, paramaters own
  axios.get(url, {headers})
    .then((response) => {
      return response.status === 202 ? axios.get(url, {headers}) : response;
    }).then((gameCollection) => {
      // assigning xml data to parse
      let xml = gameCollection.data;
      parseString(xml, { explicitArray: false, ignoreAttrs: true }, (err, games) => {
        res.send(JSON.stringify(games));
      });
    })
    .catch(error => console.log(error));
});

export default router;
