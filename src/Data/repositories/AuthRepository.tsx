import { User } from '../../Domain/entitys/User';
import { AuthRepository } from '../../Domain/repositories/AuthRepository';
import { ApiDelivery } from '../source/remote/api/ApiDelivery';
import { ResponseApiDelivery } from '../source/remote/models/ResponseApiDelivery';
export class AuthRepositoryImpl implements AuthRepository {
  async register(user:User) {
    try{

      const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user)
      return Promise.resolve({error: undefined, result: response.data})

    }catch(error){
      let e = (error as Error).message
      console.log('Error: ', e)
      return Promise.resolve({error: e, result: undefined})

    }
  }
}
