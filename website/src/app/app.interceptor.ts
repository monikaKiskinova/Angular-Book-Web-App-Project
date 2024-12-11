import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';

const {apiUrl} = environment; 
const API = '/';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.startsWith(API)) {
    // const localToken = localStorage.getItem('accessToken');
    req = req.clone({
      url: req.url.replace(API, apiUrl),
      withCredentials: true,

      // headers: req.headers.set('Authorization', 'bearer' + localToken)
    });
  }

  return next(req);
};
