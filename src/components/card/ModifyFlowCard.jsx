/** @jsx jsx */
import {Text, Button, Box, Card, jsx} from 'theme-ui'
import Step from './elements/Step'

const ModifyFlowCard = () => {
  const cardStyle = {
    mt: 3,
    borderRadius: 'default',
    boxShadow: 'default',
  }

  const boxStyle = {
    px: [3, 4],
    py: [2, 3],
  }

  const footerStyle = {
    p: [2, 3],
    borderTop: '1px solid #ebebeb',
  }

  const textStyle = {
    color: 'secondary',
    fontWeight: '500',
  }

  const buttonStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
    fontSize: '14px',
  }

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
            {name: 'Oscar Valles'},
            {name: 'Oscar Valles'},
            {name: 'Oscar Valles'},
            {name: 'Oscar Valles'},
          ]}
        />
        <Step
          index={2}
          approvers={[
            {name: 'Oscar Valles'},
            {name: 'Oscar Valles'},
            {name: 'Oscar Valles'},
            {name: 'Oscar Valles'},
          ]}
        />
        <Box sx={footerStyle}>
          <Button sx={buttonStyle} onClick={() => {}}>
            + Add New Step
          </Button>
        </Box>
      </Card>
      <Button variant="outline" my={4}>
        Publish
      </Button>
    </div>
  )
}

export default ModifyFlowCard
