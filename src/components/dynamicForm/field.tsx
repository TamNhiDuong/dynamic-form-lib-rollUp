import React from 'react'
import { get, isObject } from 'lodash-es'

import { EditableFormField } from './types'

import StringInputField from './fieldTypes/string'
import DefaultField from './fieldTypes/default'
import TextInputField from './fieldTypes/text'
import IntegerInputField from './fieldTypes/integer'
import CheckboxField from './fieldTypes/checkbox'
import DateTimeInputField from './fieldTypes/dateTime'
import SingleSelectField from './fieldTypes/singleChoice'

const Field: React.FC<EditableFormField> = ({ formField, value, onChange }) => {
  switch (formField.type) {
    case 'StringItem':
      return <StringInputField formField={formField} value={value} onChange={onChange} />
    case 'TextItem':
      return <TextInputField formField={formField} value={value} onChange={onChange} />
    case 'IntegerItem':
      return <IntegerInputField formField={formField} value={value} onChange={onChange} />
    case 'CheckboxItem':
      return <CheckboxField formField={formField} value={value} onChange={onChange} />
    case 'DateTimePickerItem':
      return <DateTimeInputField formField={formField} value={value} onChange={onChange} />
    case 'SingleChoiceItem':
      return <SingleSelectField formField={formField} value={value} onChange={onChange} />
    default:
      return (
        <DefaultField
          formField={formField}
          value={isObject(value) ? get(value, 'tile', '') : value}
          onChange={onChange}
        />
      )
  }
}

export default Field
