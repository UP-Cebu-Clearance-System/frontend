import pass from 'assets/images/pass.png'
import fail from 'assets/images/fail.png'

export const cardStyle = {
  borderRadius: 'default',
  boxShadow: 'default',
  mt: 3,
}

export const cardStyleWithBG = (status) => {
  return {
    borderRadius: 'default',
    boxShadow: 'default',
    mt: 3,
    background: `url(${status === 'pass' ? pass : fail})`,
    backgroundRepeat: 'no-repeat',
  }
}

export const buttonStyle = {
  p: [3, 4, null, null],
  background: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  width: '100%',
}

export const flexStyle = {
  justifyContent: 'space-between',
  flexWrap: 'wrap',
}

export const boxStyle = {
  px: [3, 4],
  py: [2, 3],
  borderTop: '1px solid #ebebeb',
}
