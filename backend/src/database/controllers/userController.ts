import { AppDataSource } from "../data-source";
import userRepository from "../repositories/userRepository";
import { Request, Response,Router } from "express";
import User from "../entities/User";





const userRouter = Router();

// todos usuariso
userRouter.get("/", async (req: Request, res: Response): Promise<any> => {
    
    const users = userRepository.getAll();

    return res.status(200).json({ error: null, users})

})

// adicionar
userRouter.post("/add", async (req: Request, res: Response): Promise<any> => {

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmPass = req.body.confirmPass

    if(!name || !email || !password || !confirmPass ) {
        return res.status(400).json({ error: "Preencha todos os campos!"})
    }

    if( password != confirmPass ) {
        return res.status(400).json({ error: "As senhas não conferem! "})
    }

    const user = {
        name: name,
        email: email,
        password: password
    }

    
    

    const newUser = await userRepository.addUser(user)

    if(newUser instanceof Error) {
        return res.status(400).json(newUser.message)
    }

    return res.status(201).json({ error: null, msg:"Usuario adicionado com sucesso!", newUser})

})

//logar
userRouter.post("/login", async (req: Request, res: Response): Promise<any> => {

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const user = {
        name: name,
        email: email,
        password: password
    }

    const log = await userRepository.login(user)

    if(log instanceof Error) {
        return res.status(400).json(log.message)
    }

    return res.status(200).json({error: null, msg: "Logado!"})

})

// deletar usuario
userRouter.delete("/delete/:id", async (req: Request, res: Response):Promise<any> => {

    const id = req.params.id
    const password = req.body.password

    const dele = await userRepository.deleteUser(id, password)

    if(dele instanceof Error) {
        return res.status(400).json(dele.message)
    }

    return res.status(200).json({msg: "Deletado!"})

})


export default userRouter