/** @jsx jsx */
import {useState} from 'react'
import {faCheck, faBan} from '@fortawesome/free-solid-svg-icons'
import {Flex, Card, Button, Box, jsx} from 'theme-ui'
import PropTypes from 'prop-types'

import pass from '../../static/images/pass.png'
import fail from '../../static/images/fail.png'

import TextArea from '../TextArea'
import Title from './elements/Title'
import SubInfo from './elements/SubInfo'
import ButtonComponent from '../Button'

const RequestCard = ({children, studentInfo, status}) => {
  const [isRequestCardToggled, toggleRequestCard] = useState(false)

  const cardStyle = {
    borderRadius: 'default',
    boxShadow: 'default',
    mt: 3,
  }

  const cardStyleWithBG = {
    borderRadius: 'default',
    boxShadow: 'default',
    mt: 3,
    background: `url(${status === 'pass' ? pass : fail})`,
    backgroundRepeat: 'no-repeat',
  }

  const buttonStyle = {
    p: [3, 4, null, null],
    background: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    width: '100%',
  }

  const flexStyle = {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }

  const boxStyle = {
    px: [3, 4],
    py: [2, 3],
    borderTop: '1px solid #ebebeb',
  }

  return (
    <Card sx={status ? cardStyleWithBG : cardStyle}>
      <Button sx={buttonStyle} onClick={() => toggleRequestCard(!isRequestCardToggled)}>
        <Title name={studentInfo.name} type={studentInfo.type} />
        <Flex sx={flexStyle}>
          {studentInfo.subInfo.map((info) => (
            <SubInfo name={info.name} value={info.value} key={info.name} />
          ))}
        </Flex>
        {children !== null && children}
      </Button>
      {isRequestCardToggled && (
        <Box sx={boxStyle}>
          <TextArea label="Remarks (Optional)" />
          <Box mt={3}>
            <ButtonComponent icon={faCheck} color="#86D88E" mr={3}>
              Pass
            </ButtonComponent>
            <ButtonComponent icon={faBan} color="#DF6464">
              Fail
            </ButtonComponent>
          </Box>
        </Box>
      )}
    </Card>
  )
}

RequestCard.defaultProps = {
  children: null,
}

RequestCard.propTypes = {
  children: PropTypes.element,
  studentInfo: PropTypes.object,
}

export default RequestCard
