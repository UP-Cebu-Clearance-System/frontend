/** @jsx jsx */
import {Link} from 'react-router-dom'
import {Flex, jsx} from 'theme-ui'

const Breadcrumbs = ({links}) => {
  const linkStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
    opacity: '0.6',
    mr: 2,
    textDecoration: 'none',
  }

  const activeLinkStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
    fontWeight: 600,
    textDecoration: 'none',
  }

  return (
    <Flex>
      {links &&
        links.map((link, index) => (
          <Link to={link.link} sx={index === links.length - 1 ? activeLinkStyle : linkStyle}>
            {`${link.name} ${index !== links.length - 1 ? '>' : ''}`}
          </Link>
        ))}
    </Flex>
  )
}

export default Breadcrumbs
