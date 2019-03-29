import { AbstractControl } from '@angular/forms';

export function cvvValidator(control: AbstractControl) {

    if ( /^[0-9]{3,4}$/.test(control.value)) {
      return null;
    } else {
        return {
            isError: true
        };
    }
}
