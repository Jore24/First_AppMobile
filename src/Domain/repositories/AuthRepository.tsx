import { User } from "../entitys/User";
import { ResponseApiDelivery } from '../../Data/source/remote/models/ResponseApiDelivery';
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository {
  
  login(email: string, password: string): Promise<ResponseApiDelivery>;
  register(user: User): Promise<ResponseApiDelivery>;
  registerWithImage(user: User, file: ImagePicker.ImageInfo):Promise<ResponseApiDelivery>;
  
}