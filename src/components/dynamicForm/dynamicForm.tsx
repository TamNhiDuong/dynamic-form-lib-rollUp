import React, { useEffect, useState } from "react";
import { get, capitalize } from "lodash-es";

import Typography from "@mui/material/Typography";

import {
  FormFields,
  FieldValue,
  FormValues,
  CodeType,
  FormField,
} from "./types";
import Field from "./field";

type DynamicFormProps = {
  initialFormFields: FormFields;
  initialFormValues: FormValues;
  exposeFormValues?: (getFormValues: () => FormValues) => void;
};

const DynamicForm: React.FC<DynamicFormProps> = ({
  initialFormFields,
  initialFormValues,
  exposeFormValues,
}) => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formFields, setFormFields] = useState<FormFields>([]);

  useEffect(() => {
    if (initialFormValues) {
      setFormValues(initialFormValues);
    }
  }, [initialFormValues]);

  useEffect(() => {
    if (initialFormFields) {
      setFormFields(initialFormFields);
      // set dependant's options based on upper-level-field's value
      initialFormFields
        .filter((f) => f.dependants && f.dependants.length > 0)
        .forEach((upperLevelField) => {
          const upperLevelValue = initialFormValues[upperLevelField.id];
          if (upperLevelField && upperLevelValue) {
            updateDependantOptions(
              upperLevelField,
              upperLevelValue,
              initialFormFields
            );
          }
        });
    }
  }, [initialFormFields]);

  // some field's options depend on the value of upper-level-field
  // test case: feature pensas (turkusrk.testi)
  const updateDependantOptions = (
    upperLvField: FormField,
    upperLvValue: FieldValue,
    formFields: FormFields
  ) => {
    const clonedFormFields: FormFields = [...formFields];
    if (upperLvField.dependants && upperLvField.dependants.length > 0) {
      const { dependants } = upperLvField;
      dependants.forEach((dependant: any) => {
        const dependantIdx: number = formFields.findIndex(
          (f) => f.id === dependant
        );
        const dependantField: FormField = formFields[dependantIdx];
        if (dependantField.codeTypes) {
          const dependantOptions: Array<CodeType> =
            dependantField.codeTypes.filter((ct) => {
              return ct.codeBase === get(upperLvValue, "id");
            });
          clonedFormFields[dependantIdx] = {
            ...dependantField,
            options: dependantOptions,
          };
          setFormFields(clonedFormFields);
        }
      });
    }
  };

  const handleInputChange = (id: string, value: FieldValue) => {
    setFormValues((prevData) => ({ ...prevData, [id]: value }));

    // change dependant options if upper-level-field's value changes
    const upperLevelField = formFields.filter((f) => f.id === id)[0];
    updateDependantOptions(upperLevelField, value, formFields);
  };

  useEffect(() => {
    exposeFormValues && formValues && exposeFormValues(() => formValues);
  }, [exposeFormValues, formValues]);

  // recursively render list of form fields to handle nested forms (Example: aspa_tiketti feature)
  return (
    <form style={{ padding: 10 }}>
      {formFields.map((field: any) => (
        <div key={field.id} style={{ padding: 10 }}>
          {field.fields && field.fields.length > 0 && (
            <Typography sx={{ alignContent: "flex-start", fontWeight: "600" }}>
              {capitalize(field.label)}
            </Typography>
          )}

          {field.fields && field.fields.length > 0 ? (
            <DynamicForm
              initialFormFields={field.fields}
              initialFormValues={formValues}
            />
          ) : (
            <Field
              formField={field}
              value={get(formValues, [field.id])}
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default DynamicForm;
