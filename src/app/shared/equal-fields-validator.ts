import { AbstractControl, ValidatorFn } from "@angular/forms";

export function equalFieldsValidator(fieldA: string, fieldB: string, message?: string): ValidatorFn {
    return (form: AbstractControl): { [key: string]: any } => {
        message = message || 'not euqal to original field';
        return form.get(fieldA)?.value === form.get(fieldB)?.value ? null : { notEuqual: message };
    }
}
