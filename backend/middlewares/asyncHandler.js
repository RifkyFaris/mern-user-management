const asyncHandler=(fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(error=>{
        
        res.status(400).json({message:error.message})
    })
}
export default asyncHandler;