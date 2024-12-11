import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
    passwordControlName: string, 
    rePasswordControlName: string
): ValidatorFn {
    return (control) => {
        const passwordFormControl = control.get(passwordControlName); 
        const rePasswordFormControl = control.get(rePasswordControlName);

        const arePasswordsMatching = 
        passwordFormControl?.value === rePasswordFormControl?.value;
        return arePasswordsMatching ? null : {matchPasswordsValidator: true};
    }
}