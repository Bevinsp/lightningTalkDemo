

export enum FieldTypes {
    INPUT='input',
    SELECT='select',
    RADIOGROUP='radioGroup'
}

export interface formField {
    type: string,
    formControlName: string,
    initialValue: any,
    labelText?: string,
    id?: string,
    placeholderText?: string,
    options? : any[],
    isDependentOn?: DependentOn,
    maxlength?: string,
    fulllength?: boolean
}

export interface DependentOn {
    field: string, 
    value: string, 
    // validators: any[],
    intialValue?: any
}