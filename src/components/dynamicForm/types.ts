export type FormField = {
  id: string
  type: string
  label: string
  fields?: FormField[] | []
  numberOfLines?: number
  codeTypes?: Array<CodeType>
  dependsOn?: string
  dependants?: Array<string>
  options?: Array<CodeType>
}
export type FormFields = Array<FormField>

export type CodeTypeValue = {
  id: string
}
export type FieldValue =
  | string
  | number
  | boolean
  | object
  | Array<any>
  | Date
  | null
  | CodeTypeValue

export type FormValues = Record<string, FieldValue | undefined>

export type EditableFormField = {
  value: FieldValue | undefined
  onChange: (id: string, value: FieldValue) => void
  formField: FormField
  checked?: boolean
}

export type CodeType = {
  id: string
  value: string
  codeBase?: string
  title: string
}
export type FormItemConfig = {
  id: string
  class: string
  label: string
  items?: Array<FormItemConfig>
  numberOfLines?: number
  codeTypes?: Array<CodeType>
  dependsOn?: string
}

export type FormDataConfig = {
  id: string
  title: string
  binding: object
  items: Array<FormItemConfig>
}
