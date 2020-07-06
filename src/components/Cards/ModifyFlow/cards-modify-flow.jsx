/** @jsx jsx */
import { jsx } from 'theme-ui'

// Components
import { Text, Button, Box, Card } from 'theme-ui'
import CustomButton from 'components/Button'
import { Step } from '../components'

// Styles
import {
  cardStyle,
  boxStyle,
  footerStyle,
  textStyle,
  buttonStyle,
} from './cards-modify-flow-styles'

function ModifyFlowCard() {
  return (
    <div>
      <Card sx={cardStyle}>
        <Box sx={boxStyle}>
          <Text as="h2" sx={textStyle}>
            Clearance
          </Text>
        </Box>
        <Step
          index={1}
          approvers={[
            { name: 'Oscar Valles' },
            { name: 'Oscar Valles' },
            { name: 'Oscar Valles' },
            { name: 'Oscar Valles' },
          ]}
        />
        <Step
          index={2}
          approvers={[
            { name: 'Oscar Valles' },
            { name: 'Oscar Valles' },
            { name: 'Oscar Valles' },
            { name: 'Oscar Valles' },
          ]}
        />
        <Box sx={footerStyle}>
          <Button sx={buttonStyle} onClick={() => {}}>
            + Add New Step
          </Button>
        </Box>
      </Card>
      <CustomButton mt={4} color="#8F8F8F">
        Publish
      </CustomButton>
    </div>
  )
}

export default ModifyFlowCard
