import React from 'react'
import { isString } from 'lodash-es'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import Box from '@mui/material/Box'

import { EditableFormField } from '../types'

const DateTimeInputField: React.FC<EditableFormField> = ({ formField, value, onChange }) => {
  const { id, label } = formField
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ width: '100%' }}>
        <DateTimePicker
          label={label}
          value={value && isString(value) ? new Date(value) : null}
          onChange={(newValue) => onChange(id, newValue)}
          slotProps={{ textField: { size: 'small' } }}
        />
      </Box>
    </LocalizationProvider>
  )
}

export default DateTimeInputField
