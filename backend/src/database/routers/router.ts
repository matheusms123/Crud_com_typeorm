import { Router } from "express";

import userRouter from "../controllers/userController";
import festaRouter from "../controllers/festaController"
// import { CreateUserController } from "../controllers/CreateUserController";

const route = Router();

route.use("/users",userRouter)

route.use("/festas", festaRouter)


//route.post("/usere", new CreateUserController().handle);


export default route