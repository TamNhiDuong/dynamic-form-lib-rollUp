import React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'

import { EditableFormField } from '../types'
import colors from '../colors'

const DefaultField: React.FC<EditableFormField> = ({ formField, value }) => {
  const { id, label } = formField
  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth={true}>
        <TextField
          id={id}
          value={value ? value : ''}
          label={label}
          fullWidth={true}
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true
          }}
          sx={{ backgroundColor: colors.backgroundGrey }}
          disabled
        />
      </FormControl>
    </Box>
  )
}

export default DefaultField
