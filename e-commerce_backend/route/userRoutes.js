import { Router } from 'express';
import { loginUserController, logoutuserController, registerUserController, verifyemailusercontroller } from '../controller/userController.js';
import auth from '../middleware/auth.js';


const userRouter = Router();

userRouter.post('/register', registerUserController);
userRouter.post('/verify-email', verifyemailusercontroller)
userRouter.post('/login', loginUserController)
userRouter.get('/logout', auth, logoutuserController)
export default userRouter;