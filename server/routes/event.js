import { Router } from "express";
/*Express offers the Express Router to create such modular 
* routes without mounting them directly to the Express application instance.*/
const router = Router();

router.get("/", (req, res) => {
  return res.send("This are the events");
});

export default router;