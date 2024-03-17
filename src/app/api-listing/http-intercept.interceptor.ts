import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest =  request.clone({
      setHeaders:{
        "Authorization": "Bearer QpwL5tke4Pnpja7X4",
        "Resource-Path": window.location.origin,
        "Secret-To-XYZ-Authority": "XYZ"
      }
    });
    return next.handle(modifiedRequest);
  }
}
