export const buttonStyle = (color) => {
  return {
    borderRadius: '100px',
    color,
    borderColor: color,
    '&:hover': {
      backgroundColor: color,
    },
  }
}

export const iconStyle = { marginRight: '12px', color: 'inherit' }
