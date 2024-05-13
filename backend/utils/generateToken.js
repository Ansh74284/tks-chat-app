import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '365d',
    });

    res.cookie("jwt",token,{
        maxAge: 365 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, //prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", //CSRF Attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;