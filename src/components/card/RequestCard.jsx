/** @jsx jsx */
import {Flex, Card, jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import Title from './elements/Title'
import SubInfo from './elements/SubInfo'

const RequestCard = ({children, studentInfo}) => {
  const cardStyle = {
    p: [3, 4, null, null],
    mt: 3,
    borderRadius: 'default',
    boxShadow: 'default',
  }

  const flexStyle = {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }

  return (
    <Card sx={cardStyle}>
      <Title name={studentInfo.name} type={studentInfo.type} />
      <Flex sx={flexStyle}>
        {studentInfo.subInfo.map((info) => (
          <SubInfo name={info.name} value={info.value} key={info.name} />
        ))}
      </Flex>
      {children !== null && children}
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
