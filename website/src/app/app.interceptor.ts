import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.development';

const {apiUrl} = environment; 

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.startsWith('/')) {
    req = req.clone({
      url: req.url.replace('/', apiUrl),
      withCredentials: true,
    });
  }

  return next(req);
};
