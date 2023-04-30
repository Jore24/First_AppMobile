import { AxiosError } from 'axios';
import { User } from '../../Domain/entitys/User';
import { AuthRepository } from '../../Domain/repositories/AuthRepository';
import { ApiDelivery } from '../source/remote/api/ApiDelivery';
import { ResponseApiDelivery } from '../source/remote/models/ResponseApiDelivery';

export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create',
        user
      );
      return Promise.resolve(response.data);
      
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
}
