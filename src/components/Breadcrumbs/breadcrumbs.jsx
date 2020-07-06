/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Components
import { Link } from 'react-router-dom'
import { Flex } from 'theme-ui'

// Styles
import { activeLinkStyle, linkStyle } from './breadcrumbs-style'

function Breadcrumbs({ links }) {
  return (
    <Flex>
      {links &&
        links.map((link, index) => (
          <Link
            to={link.link}
            sx={index === links.length - 1 ? activeLinkStyle : linkStyle}
          >
            {`${link.name} ${index !== links.length - 1 ? '>' : ''}`}
          </Link>
        ))}
    </Flex>
  )
}

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}

export default Breadcrumbs
