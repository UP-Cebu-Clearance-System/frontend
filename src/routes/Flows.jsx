import React from 'react'
import {Container, Box} from 'theme-ui'
import Navigation from '../components/Navigation'
import FlowCard from '../components/card/FlowCard'
import AddFlowCard from '../components/card/AddFlowCard'
import ModifyFlowCard from '../components/card/ModifyFlowCard'

const Flows = () => {
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
