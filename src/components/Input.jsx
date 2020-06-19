/** @jsx jsx */
import {Input, jsx} from 'theme-ui'

const InputComponent = ({id, type, placeholder}) => {
  const inputStyle = {
    height: '40px',
    borderColor: '#BDBDBD',
  }

  return <Input id={id} name={id} type={type} placeholder={placeholder} sx={inputStyle} />
}

export default InputComponent
