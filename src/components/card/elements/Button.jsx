/** @jsx jsx */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, jsx} from 'theme-ui'

const CustomButton = ({icon, onClick, text}) => {
  const buttonStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
  }

  return (
    <Button sx={buttonStyle} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} style={{marginRight: '12px', color: '#8F8F8F'}} />}
      {text}
    </Button>
  )
}

export default CustomButton
