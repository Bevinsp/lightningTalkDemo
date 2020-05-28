

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

export let dynamicPageFormFields: formField[] = [
    {
        formControlName: 'personOrBusiness',
        type: FieldTypes.RADIOGROUP,
        labelText: 'Please select an option below:',
        options: ['Person','Business'],
        initialValue: 'Person',
    },
    {
        formControlName: 'firstName',
        type: FieldTypes.INPUT,
        labelText: 'First name',
        initialValue: '',
        isDependentOn: {
            field: 'personOrBusiness',
            value: 'Person',
        }
    },
    {
        formControlName: 'lastName',
        type: FieldTypes.INPUT,
        labelText: 'Last name',
        initialValue: '',
        isDependentOn: {
            field: 'personOrBusiness',
            value: 'Person',
        }
    },
    {
        formControlName: 'businessName',
        type: FieldTypes.INPUT,
        labelText: 'Business name',
        initialValue: '',
        isDependentOn: {
            field: 'personOrBusiness',
            value: 'Business',
        }
    },
    {
        formControlName: 'addressLine1',
        type: FieldTypes.INPUT,
        labelText: 'Address Line One',
        initialValue: '',
    },
    {
        formControlName: 'addressLine2',
        type: FieldTypes.INPUT,
        labelText: 'Address Line Two',
        initialValue: '',
    },
    {
        formControlName: 'city',
        type: FieldTypes.INPUT,
        labelText: 'City',
        initialValue: '',
    },
    {
        formControlName: 'state',
        type: FieldTypes.SELECT,
        labelText: 'State',
        initialValue: '',
        options: ['AR','AZ','OH','TX']
    },
    {
        formControlName: 'country',
        type: FieldTypes.SELECT,
        labelText: 'Country',
        initialValue: '',
        options:['United States','Canada','Mexico']
    },
    // NEW FIELD
    // {
    //     formControlName: 'workPhone',
    //     type: FieldTypes.INPUT,
    //     labelText: 'Work Phone',
    //     initialValue: '',
    // },
]