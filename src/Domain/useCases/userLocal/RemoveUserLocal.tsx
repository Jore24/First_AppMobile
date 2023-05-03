import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entitys/User";

const { remove } = new UserLocalRepositoryImpl();

export const RemoveUserLocalUseCase = async () => {
  return await remove();
}