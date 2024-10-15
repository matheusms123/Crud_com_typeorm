import Festas from "../entities/Festa";
import { AppDataSource } from "../data-source";


const festaRepositori = AppDataSource.getRepository(Festas)

const getAll = () => {
    
    return festaRepositori.find();

}

const create = ( festa: any) => {
    
    return festaRepositori.save(festa)

}

const getOne = (id: any) => {
    return festaRepositori.findOneById(id)
}

export default { getAll, create,getOne }  