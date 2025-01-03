import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";

export function validacionAsincronaPrueba(): AsyncValidatorFn {

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return of(null).pipe(delay(2000)); 
    }
}