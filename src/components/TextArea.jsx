/** @jsx jsx */
import {Label, Textarea, Box, jsx} from 'theme-ui'

const TextArea = ({label}) => {
  const labelStyle = {
    color: 'secondary',
    fontSize: '12px',
    opacity: '0.7',
    fontWeight: 600,
    mb: 1,
    textTransform: 'uppercase',
  }

  const textAreaStyle = {
    borderColor: '#bdbdbd',
    fontFamily: 'sans-serif',
  }

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
