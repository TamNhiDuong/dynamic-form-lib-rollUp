import React from 'react';

type FormField = {
    id: string;
    type: string;
    label: string;
    fields?: FormField[] | [];
    numberOfLines?: number;
    codeTypes?: Array<CodeType>;
    dependsOn?: string;
    dependants?: Array<string>;
    options?: Array<CodeType>;
};
type FormFields = Array<FormField>;
type CodeTypeValue = {
    id: string;
};
type FieldValue = string | number | boolean | object | Array<any> | Date | null | CodeTypeValue;
type FormValues = Record<string, FieldValue | undefined>;
type EditableFormField = {
    value: FieldValue | undefined;
    onChange: (id: string, value: FieldValue) => void;
    formField: FormField;
    checked?: boolean;
};
type CodeType = {
    id: string;
    value: string;
    codeBase?: string;
    title: string;
};
type FormItemConfig = {
    id: string;
    class: string;
    label: string;
    items?: Array<FormItemConfig>;
    numberOfLines?: number;
    codeTypes?: Array<CodeType>;
    dependsOn?: string;
};
type FormDataConfig = {
    id: string;
    title: string;
    binding: object;
    items: Array<FormItemConfig>;
};

type DynamicFormProps = {
    initialFormFields: FormFields;
    initialFormValues: FormValues;
    exposeFormValues?: (getFormValues: () => FormValues) => void;
};
declare const DynamicForm: React.FC<DynamicFormProps>;

export { type CodeType, type CodeTypeValue, DynamicForm, type EditableFormField, type FieldValue, type FormDataConfig, type FormField, type FormFields, type FormItemConfig, type FormValues };
