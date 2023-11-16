import React from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { EditableFormField } from '../types'

const CheckboxField: React.FC<EditableFormField> = ({ formField, value, onChange }) => {
  const { id, label } = formField
  const fieldValue: boolean = !!value

  return (
    <FormControlLabel
      control={<Checkbox checked={fieldValue} onChange={() => onChange(id, !value)} />}
      label={label}
      labelPlacement="end"
    />
  )
}

export default CheckboxField
