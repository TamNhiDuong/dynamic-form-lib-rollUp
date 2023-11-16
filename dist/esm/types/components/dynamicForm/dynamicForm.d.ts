import React from "react";
import { FormFields, FormValues } from "./types";
type DynamicFormProps = {
    initialFormFields: FormFields;
    initialFormValues: FormValues;
    exposeFormValues?: (getFormValues: () => FormValues) => void;
};
declare const DynamicForm: React.FC<DynamicFormProps>;
export default DynamicForm;
