import { User } from "../entitys/User";
import { ResponseApiDelivery } from '../../Data/source/remote/models/ResponseApiDelivery';


export interface AuthRepository {
  
  login(email: string, password: string): Promise<ResponseApiDelivery>;
  register(user: User): Promise<ResponseApiDelivery>;
  
}