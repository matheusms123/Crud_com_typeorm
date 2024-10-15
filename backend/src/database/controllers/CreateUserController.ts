// import { Request, Response } from "express";
// import { CreateUserServicy } from "../services/createUserServices";

// export class CreateUserController {
//     async handle(req:Request, res: Response) {
//         const {name, email, password} = req.body

//         const service = new CreateUserServicy()

//         const result = await service.execute({ name, email, password});

//         if(result instanceof Error) {
//             return res.status(400).json( result.message );
//         }

//         return res.status(201).json({ error: null, "Usuario cadastrado com sucesso"})
//     }
// }