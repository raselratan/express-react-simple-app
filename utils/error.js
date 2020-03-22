const serverError = (res,error) => {
    return res.status(500).json({message:'Internal Error'})
}

module.exports = serverError