import React from 'react'

// Components
import { Container, Box } from 'theme-ui'
import { FlowCard, AddFlowCard, ModifyFlowCard } from 'components/Cards'
import Navigation from 'components/Navigation'

function Flows() {
  const gridStyle = {
    display: 'grid',
    gridGap: 4,
    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
    mt: 4,
  }

  return (
    <>
      <Navigation />
      <Container>
        <Box sx={gridStyle}>
          <FlowCard />
          <FlowCard />
          <AddFlowCard />
        </Box>
        <ModifyFlowCard />
      </Container>
    </>
  )
}

export default Flows
