/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Components
import { Flex, Card, Box } from 'theme-ui'
import Title from './elements/Title'
import SubInfo from './elements/SubInfo'
import Status from './elements/Status'

// Styles
import { cardStyle, titleStyle, flexStyle } from './cards-status-styles'

function StatusCard({ children, studentInfo, statuses }) {
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

export default StatusCard
