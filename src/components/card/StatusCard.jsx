/** @jsx jsx */
import {Flex, Card, Box, jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import Title from './elements/Title'
import SubInfo from './elements/SubInfo'
import Status from './elements/Status'

const StatusCard = ({children, studentInfo, statuses}) => {
  const cardStyle = {
    mt: 3,
    borderRadius: 'default',
    boxShadow: 'default',
  }

  const titleStyle = {
    p: [3, 4, null, null],
  }

  const flexStyle = {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }

  return (
    <Card sx={cardStyle}>
      <Box sx={titleStyle}>
        <Title name={studentInfo.name} type={studentInfo.type} />
        <Flex sx={flexStyle}>
          {studentInfo.subInfo.map((info) => (
            <SubInfo name={info.name} value={info.value} key={info.name} />
          ))}
        </Flex>
      </Box>
      {statuses.map((info) => (
        <Status office={info.office} status={info.status} remarks={info.remarks} />
      ))}
      {children !== null && children}
    </Card>
  )
}

StatusCard.defaultProps = {
  children: null,
}

StatusCard.propTypes = {
  children: PropTypes.element,
  studentInfo: PropTypes.object,
  statuses: PropTypes.arrayOf(PropTypes.object),
}

export default StatusCard;
