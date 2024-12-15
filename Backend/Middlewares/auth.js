import jwt from 'jsonwebtoken'

const userAuth=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.status(500).json({ success: false, message: "Not Authorized, Login again" });
    }

    try {
        const tokenDecode=jwt.verify(token,process.env.JWT_SECRET);
        if(tokenDecode.id){
            req.body.userId=tokenDecode.id;
        }else{
            return res.status(500).json({ success: false, message: "Not Authorized, Login again" });
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export default userAuth;