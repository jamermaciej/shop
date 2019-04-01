import { AbstractControl } from '@angular/forms';

export function expiredMonthValidator(control: AbstractControl) {

    if (/^0[1-9]|1[0-2]$/.test(control.value)) {
      return null;
    } else {
        return {
            isError: true
        };
    }
}

export function expiredYearValidator(control: AbstractControl) {

    if (/^\d{2}$|^\d{4}$/.test(control.value)) {
      return null;
    } else {
        return {
            isError: true
        };
    }
}
