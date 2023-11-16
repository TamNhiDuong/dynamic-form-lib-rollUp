import React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'

import { EditableFormField } from '../types'
import colors from '../colors'

const StringInputField: React.FC<EditableFormField> = ({ formField, value, onChange }) => {
  const { id, label } = formField
  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth={true}>
        <TextField
          id={id}
          value={value ? value : ''}
          onChange={(event) => onChange(id, event.target.value)}
          label={label}
          fullWidth={true}
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
          sx={{ backgroundColor: colors.backgroundGrey }}
        />
      </FormControl>
    </Box>
  )
}

export default StringInputField
