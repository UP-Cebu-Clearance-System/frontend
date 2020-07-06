/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Label, Textarea, Box } from 'theme-ui'

import { labelStyle, textAreaStyle } from './text-area-styles'
function TextArea({ label }) {
  return (
    <Box as="form">
      <Label htmlFor="remarks" sx={labelStyle}>
        {label}
      </Label>
      <Textarea id="remarks" name="remarks" sx={textAreaStyle} />
    </Box>
  )
}

export default TextArea
