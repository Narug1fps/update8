import express from "express";

const router = express.Router();

router.get("/",  (req, res) => {
    try{
        
 res.status(200).json({message:"OK👍"})
}catch(error){
    res.status(500).json({message:"Error", error:error})
}
})

export default router;