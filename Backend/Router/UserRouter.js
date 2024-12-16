import express from 'express'
import {login,signup, userCredits} from '../Controllers/AuthController.js'
import userAuth from '../Middlewares/auth.js'

const userRouter=express.Router()

userRouter.post('/signup',signup)
userRouter.post('/login',login)
userRouter.get('/credits',userAuth,userCredits)

export default userRouter