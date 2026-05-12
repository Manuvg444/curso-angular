import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const loadingService = inject(LoadingService);

  loadingService.show();


  const token = authService.getToken();

  const authReq = req.clone({
    setHeaders: {
      'Authorization':
        `Bearer ${token}`,
      'X-Admin': req.url.includes('jsonplaceholder') ? 'true' : 'false'
    }
  });

  return next(authReq).pipe(
    finalize(() =>
      loadingService.hide())
  );
};