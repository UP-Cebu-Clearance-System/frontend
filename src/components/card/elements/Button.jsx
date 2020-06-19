/** @jsx jsx */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, jsx} from 'theme-ui'

const CustomButton = ({icon, onClick, children}) => {
  const buttonStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
    fontWeight: 600,
  }

  const iconStyle = {marginRight: '12px', color: 'inherit'}

  return (
    <Button sx={buttonStyle} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} style={iconStyle} />}
      {children}
    </Button>
  )
}

export default CustomButton
