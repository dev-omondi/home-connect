
const notFound=(req ,res,next)=>{
    const error=new Error(`Not Found:-${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler=(err,req,res,next)=>{
    let message=err.message
    let statusCode=res.statusCode===200?500:res.statusCode
    if (err.name==="CastError"&&err.kind==="ObjectId") {

        statusCode=404
        message="Resource Is Not Found"
        
    }
    res.status(statusCode).json({
        message,
        stackTrace:process.env.NODE_ENV==="production"?null:err.stack
    })
}
export{notFound,errorHandler}