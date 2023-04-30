import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../../Domain/entitys/User";

const { getUser } = new UserLocalRepositoryImpl();

export const GetUserUseCase = async () => {
  return await getUser();
}