import { FormGroup } from "@angular/forms";

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors["mustMatch"]) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

// export class CustomValidators {
  
//     /* Description : allow only nmbers between 0-9 */
//     keyPressNumbers(event: any) {
//       var charCode = event.which ? event.which : event.keyCode;
//       // Only Numbers 0-9
//       if (charCode < 48 || charCode > 57) {
//         return false;
//       } else {
//         return true;
//       }
//     }
// }