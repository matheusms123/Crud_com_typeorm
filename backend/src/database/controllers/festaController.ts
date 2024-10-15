import { Request, Response, Router} from "express"
import Festas from "../entities/Festa"
import festaRepository from "../repositories/festaRepository";


const route = Router();

route.get("/", async (req: Request, res: Response): Promise<any> => {
    
    const festas = await festaRepository.getAll()

    return res.status(200).json(festas)

})

route.post( "/create", async (req: Request, res: Response):Promise<any> => {

    const party_name = req.body.party_name
    const description = req.body. description
    const party_date = req.body.party_date
    const criador = req.body.criador

    const festas = {
        party_name: party_name,
        description: description,
        party_date: party_date,
        criador: criador
    }
 
    const newFesta = await festaRepository.create(festas)

    return res.status(201).json({ error: null, msg: "Festa está criada só falta os convidados", newFesta})

})

route.get("/:id", async (req: Request, res: Response): Promise<any> => {
    
    const id = req.params.id
    
    const festa = await festaRepository.getOne(id)

    return res.status(200).json(festa)

})



export default route