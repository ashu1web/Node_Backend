import express from 'express';
import { shortUrl, getOriginalUrl } from '../controller/url.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { shortUrl: null });
});

router.post("/short", shortUrl);
router.get("/:shortCode", getOriginalUrl);         //dynamic route will call on its own

export { router as urlRoutes };
