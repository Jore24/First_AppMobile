import { User } from "../entitys/User";

export interface AuthRepository {
  
  register(user: User): Promise<any>;
}