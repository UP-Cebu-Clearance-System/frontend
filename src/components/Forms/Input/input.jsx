/** @jsx jsx */
import { jsx } from 'theme-ui'

// Components
import { Input } from 'theme-ui'

// Styles
import { inputStyle } from './input-styles'

function InputComponent({ ...options }) {
  return <Input sx={inputStyle} {...options} />
}

export default InputComponent
