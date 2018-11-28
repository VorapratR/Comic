import { LoginPage } from './../login/login';

export class UserService {
    user:any;
    
    constructor(private login:LoginPage) {
        this.user= login.getData();
    }
      
      getUser(){
        return this.user;
      }
}
  