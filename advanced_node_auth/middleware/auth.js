const jwt = require('jsonwebtoken');
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        // Bearer 42041040124asdaad2
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if(!user){
            return next(new ErrorResponse("No user found", 404));
        }

        req.user = user;
        next();
    }catch(err){
        return next(new ErrorResponse("Not authorized to acces this route, catch error", 401))
    }
}