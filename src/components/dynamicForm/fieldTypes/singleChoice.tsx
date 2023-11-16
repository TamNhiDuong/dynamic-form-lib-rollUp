import React from 'react'
import { get, isObject } from 'lodash-es'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

import { EditableFormField, CodeType } from '../types'

const SingleSelectField: React.FC<EditableFormField> = ({ formField, value, onChange }) => {
  const { id, label, codeTypes, options } = formField

  const getFullValueObj = (value: object): CodeType | null => {
    const filtered = codeTypes?.filter(
      (ct) => ct.id === get(value, 'id') || ct.title === get(value, 'title')
    )
    return filtered ? filtered[0] : null
  }

  const handleChange = (codeType: CodeType) => {
    onChange(id, codeType)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth size="small">
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={value && isObject(value) ? getFullValueObj(value)?.title : ''}
          label={label}>
          {options?.map((codeType: CodeType) => (
            <MenuItem
              key={codeType.id}
              value={codeType.value}
              onClick={() => handleChange(codeType)}>
              {codeType.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* todo: added locale */}
      {formField.dependsOn && (
        <Typography sx={{ color: 'red' }}>{`${'Field depends on'} "${
          formField.dependsOn
        }"`}</Typography>
      )}
    </Box>
  )
}

export default SingleSelectField
