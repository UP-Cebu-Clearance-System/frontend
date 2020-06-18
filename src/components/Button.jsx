/** @jsx jsx */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, jsx} from 'theme-ui'

const ButtonComponent = ({children, icon, color, mr, mt}) => {
  const buttonStyle = {
    borderRadius: '100px',
    color,
    borderColor: color,
    '&:hover': {
      backgroundColor: color,
    },
  }

  const iconStyle = {marginRight: '12px', color: 'inherit'}

  return (
    <Button variant="outline" sx={buttonStyle} mr={mr} mt={mt}>
      {icon && <FontAwesomeIcon icon={icon} style={iconStyle} />}
      {children}
    </Button>
  )
}

export default ButtonComponent
