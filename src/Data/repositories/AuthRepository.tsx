import { AxiosError } from 'axios';
import { User } from '../../Domain/entitys/User';
import { AuthRepository } from '../../Domain/repositories/AuthRepository';
import { ApiDelivery, ApiDeliveryForImage } from '../source/remote/api/ApiDelivery';
import { ResponseApiDelivery } from '../source/remote/models/ResponseApiDelivery';
import { ImageInfo, ImagePickerAsset } from 'expo-image-picker';
import mime from 'mime';
export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const {data} = await ApiDelivery.post<ResponseApiDelivery>('/users/create',
        user
      );
      return Promise.resolve(data);
      
    } catch (error) {

      let e = error as AxiosError;
      console.log('Error del AuthRepository: ',JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }

  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/users/login',{
          email: email,
          password: password,
        });
      return Promise.resolve(response.data);

    } catch (error) {

      let e = error as AxiosError;
      console.log('Error del AuthRepository: ',JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }

  async registerWithImage(user: User, file: ImageInfo): Promise<ResponseApiDelivery> {
    try {
      let data = new FormData();
      data.append('image', {
        //@ts-ignore
        uri: file.uri,
         //@ts-ignore
        name: file.uri.split('/').pop(),
        type: mime.getType(file.uri)!
        });
        data.append('user', JSON.stringify(user));
        const response = await ApiDeliveryForImage.post<ResponseApiDelivery>('/users/createWithImage',data);
        return Promise.resolve(response.data);

      

    } catch (error) {

      let e = error as AxiosError;
      console.log('Error del AuthRepository: ',JSON.stringify(e.response?.data));
      const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
    
  }
}
