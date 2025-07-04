
import { Url } from "../model/url.js";
import shortid from "shortid";

export const shortUrl = async (req,res)=>{
 //const longUrl = req.body.longUrl;
 const {longUrl} =req.body
 const shortCode = shortid.generate();

 console.log("longurl-->",longUrl)

 const shortUrl = `http://localhost:3000/${shortCode}`

 console.log("shorturl-->",shortUrl)

 // save to database
 const newUrl = new Url({shortCode,longUrl})
 await newUrl.save();

 console.log("short saved = ",newUrl)

 res.render("index.ejs",{shortUrl});

}

export const getOriginalUrl = async (req,res) =>{
  const shortCode = req.params.shortCode

  // find on database
  const originalUrl = await Url.findOne({shortCode})

  if(originalUrl){
    res.redirect(originalUrl.longUrl);
  }else{
      res.json({ message:"Invalid shortcode" });
  }

}