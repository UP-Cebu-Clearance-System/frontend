import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'theme-ui'
import clearance from './styles/clearance'

console.log(clearance)
const Home = lazy(() => import('./routes/Home'))
const Flows = lazy(() => import('./routes/Flows'))
const App = () => (
  <ThemeProvider theme={clearance}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Flows} />
        </Switch>
      </Suspense>
    </Router>
  </ThemeProvider>
)

export default App
