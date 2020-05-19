import React from 'react'
import {Container} from 'theme-ui'
import Navigation from '../components/Navigation'
import RequestCard from '../components/card/RequestCard'

const Home = () => (
  <>
    <Navigation />
    <Container>
      <RequestCard
        studentInfo={{
          name: 'Oscar Vian Valles',
          type: 'Clearance',
          subInfo: [
            {name: 'Student Number', value: '2018-0XXXX'},
            {name: 'Program', value: 'BS Computer Science'},
            {name: 'Last Sem Attended', value: '2nd Sem 2018'},
            {name: 'Date Graduated', value: 'July 2018'},
          ],
        }}
      />

      <RequestCard
        studentInfo={{
          name: 'Oscar Vian Valles',
          type: 'Clearance',
          subInfo: [
            {name: 'Student Number', value: '2018-0XXXX'},
            {name: 'Program', value: 'BS Computer Science'},
            {name: 'Last Sem Attended', value: '2nd Sem 2018'},
            {name: 'Date Graduated', value: 'July 2018'},
          ],
        }}
      />

      <RequestCard
        studentInfo={{
          name: 'Oscar Vian Valles',
          type: 'Clearance',
          subInfo: [
            {name: 'Student Number', value: '2018-0XXXX'},
            {name: 'Program', value: 'BS Computer Science'},
            {name: 'Last Sem Attended', value: '2nd Sem 2018'},
            {name: 'Date Graduated', value: 'July 2018'},
          ],
        }}
      />
    </Container>
  </>
)

export default Home
