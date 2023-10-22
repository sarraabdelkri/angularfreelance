import { AuthService } from './services/auth.service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authService=this.injector.get(AuthService);
    let tokenReq=request.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenReq);
  }
}
