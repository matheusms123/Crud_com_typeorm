import User from "../entities/User";
import { AppDataSource } from "../data-source";
import IUser from "../interfaces/IUser";

type user = {
    name: string;
    email: string;
    password: string;
}


const useRepositories = AppDataSource.getRepository(User)

const getAll = () => {

    return useRepositories.find();

}

const addUser = async ({name, email, password}: user):Promise<User| Error> => {
    
    const checkUser = await useRepositories.findOneBy({email})

    if(checkUser) {
        return new Error("Este usuario já foi cadastrado!")
    }
    
    const user =  useRepositories.create({
        name,
        email,
        password
    })

    await useRepositories.save(user)

    return user
}

//

const login = async ({email, password}:user):Promise<User | Error> => {
    
    const user = await useRepositories.findOneBy({email})

    if(!user) {
        return new Error("Usuario ou senha invalidos")
    }

    if(password != user.password) {
        return new Error("Usuario ou senha não conferem!")
    }

    return user

}

const deleteUser = async (id:any, password: string) => {

    const user = await useRepositories.findOneById(id)


    if(password != user?.password) {
        return new Error("Senha invalida!")
    }

    if(!user) {
        return new Error("Este usuario não existe!")
    }

    if(password == user.password) {
        await useRepositories.delete(user)
    }


}




export default { getAll, addUser, login, deleteUser }