/** @jsx jsx */
import { jsx } from 'theme-ui'

// Components
import { Select } from 'theme-ui'

// Styles
import { dropdownStyle } from './dropdown-styles'

function DropdownComponent({ items, ...options }) {
  return (
    <Select sx={dropdownStyle} {...options}>
      {items?.map((item, index) => (
        <option key={`${item}-${index}`}>{item}</option>
      ))}
    </Select>
  )
}

export default DropdownComponent
