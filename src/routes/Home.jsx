import React from 'react'
import { Container } from 'theme-ui'
import Navigation from '../components/Navigation'
import StatusCard from '../components/card/StatusCard'

const Home = () => (
  <>
    <Navigation />
    <Container>
      <StatusCard
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
        statuses={[
          {
            office: 'College of Science Secretary',
            status: 'Passed',
            remarks: 'Very good',
          },
          {
            office: 'College of Science Secretary',
            status: 'Passed',
            remarks: 'Very good',
          },
          {
            office: 'College of Science Secretary',
            status: 'Passed',
            remarks: 'Very good',
          },
        ]}
      />
    </Container>
  </>
)

export default Home
