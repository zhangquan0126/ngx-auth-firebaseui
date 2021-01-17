import {AuthProvider} from '../services/auth-process.service';

export interface ICredentials {
  email: string;
  password: string;
}
export interface ISignProcess {

  onSuccessEmitter: any;
  onErrorEmitter: any;

  signUp(name: string, credentials: ICredentials): any;

  signInWith(provider: AuthProvider, credentials?: ICredentials): any;

  resetPassword(email: string): any;
}
