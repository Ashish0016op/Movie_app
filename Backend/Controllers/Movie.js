const MovieDetail =require('../Models/MovieDetail');
exports.PostMovieDetails=async(req,res,next)=>{
    try{
        const {ImageURL,Name,Durations,type,Language,Description,ReleasedDate,Rating,isReleased}=req.body;
        const PostDetails=new MovieDetail({
            ImageURL:ImageURL,
            Name:Name,
            Durations:Durations,
            type:type,
            Language:Language,
            Description:Description,
            ReleasedDate:ReleasedDate,
            Rating:Rating,
            isReleased:isReleased
        })
        await PostDetails.save();
        console.log(PostDetails);
        return res.status(200).json({"MovieDetails":PostDetails});
    }catch(err){
        return res.status(401).json({"message":err})
    }
}
exports.getMovieDetails=async(req,res,next)=>{
    try{
        const response=await MovieDetail.find();
        return res.status(200).json({"MovieDetails":response});
    }catch(err){
        return res.status(401).json({"message":err});
    }
}
exports.getMovieById=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const response=await MovieDetail.findById({_id:id})
        return res.status(200).json({"MovieDetail":response});
    }catch(err){
        return res.status(401).json({"message":err});
    }
}