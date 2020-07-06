import React from 'react'

// Components
import { Container, Flex, Box } from 'theme-ui'
import Navigation from 'components/Navigation'
import Breadcrumbs from 'components/Breadcrumbs'
import { Input } from 'components/Forms'
import { LinkCard, RequestCard } from 'components/Cards'

function Pending() {
  const gridStyle = {
    display: 'grid',
    gridGap: 4,
    gridTemplateColumns: ['1fr', '1fr 1fr'],
    mt: 4,
  }

  const flexStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 4,
  }

  return (
    <>
      <Navigation />
      <Container>
        <Flex sx={flexStyle}>
          <Breadcrumbs
            links={[
              {
                link: '#',
                name: 'Home',
              },
              {
                link: '#',
                name: 'Pending Students',
              },
            ]}
          />
          <Box sx={{ width: '200px' }}>
            <Input placeholder="Search" id="search" type="text" />
          </Box>
        </Flex>
        <Box sx={gridStyle}>
          <LinkCard />
          <LinkCard />
        </Box>
        <RequestCard
          status="pass"
          studentInfo={{
            name: 'Oscar Vian Valles',
            type: 'Clearance',
            subInfo: [
              { name: 'Student Number', value: '2018-0XXXX' },
              { name: 'Program', value: 'BS Computer Science' },
              { name: 'Last Sem Attended', value: '2nd Sem 2018' },
              { name: 'Date Graduated', value: 'July 2018' },
            ],
          }}
        />
        <RequestCard
          status="fail"
          studentInfo={{
            name: 'Oscar Vian Valles',
            type: 'Clearance',
            subInfo: [
              { name: 'Student Number', value: '2018-0XXXX' },
              { name: 'Program', value: 'BS Computer Science' },
              { name: 'Last Sem Attended', value: '2nd Sem 2018' },
              { name: 'Date Graduated', value: 'July 2018' },
            ],
          }}
        />

        <RequestCard
          status="pass"
          studentInfo={{
            name: 'Oscar Vian Valles',
            type: 'Clearance',
            subInfo: [
              { name: 'Student Number', value: '2018-0XXXX' },
              { name: 'Program', value: 'BS Computer Science' },
              { name: 'Last Sem Attended', value: '2nd Sem 2018' },
              { name: 'Date Graduated', value: 'July 2018' },
            ],
          }}
        />
      </Container>
    </>
  )
}

export default Pending
