import { HttpErrorResponse } from "@angular/common/http";
import { Injectable, ErrorHandler, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { HTTP_ERROR_CODES } from "src/app/shared/constants/http-errors";
import { environment } from "src/environments/environment";
import { setError } from "../store/actions/error.actions";
import { State } from "../store/store";

@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private store: Store<State>, private router: Router, private zone: NgZone) {}

    handleError(error: string | Error | any): void {
        const message = this.defaultMessage(error.rejection);
        this.printOnConsole(message);
        this.store.dispatch(setError({payload: {code: error.rejection.status, message}}));
        
        this.zone.run(() => {
            this.router.navigate(['/error']);
        });
    }

    private defaultMessage(error) {
        if (error instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                return HTTP_ERROR_CODES.NO_INTERNET;
            }
            if (error.hasOwnProperty('status')) {
                return this.getErrorHttpCode(error.status);
            }
        }
        return error;
    }
    
    private printOnConsole(message): void {
        const response = {
            date: new Date().toLocaleString(),
            path: window.location.href,
            message,
        };
        if (!environment.production) {
            window.console.error('Error inesperado:\n', response);
        }
    }
    
    public getErrorHttpCode(httpCode: number): string {
        if (!HTTP_ERROR_CODES[httpCode]) {
            return HTTP_ERROR_CODES.REQUEST_FAILED;
        }
        return HTTP_ERROR_CODES[httpCode];
    }
}