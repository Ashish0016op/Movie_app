const express=require('express');
const router=express.Router();
const MovieControllers = require('../Controllers/Movie');
router.post("/post_movie",MovieControllers.PostMovieDetails);
router.get("/get_Movie_details",MovieControllers.getMovieDetails);
router.get("/getSpecificMovie/:id",MovieControllers.getMovieById);
module.exports=router;