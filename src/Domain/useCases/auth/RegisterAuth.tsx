import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entitys/User";
const {register} = new AuthRepositoryImpl()

export const RegisterAuthUseCase = async  (user : User) => {
  return await register(user);

}