import React, { lazy } from 'react'

// Components
import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import { Provider as StoreProvider } from 'react-redux'

import clearance from 'styles/clearance'
import store from 'redux/store'

const Home = lazy(() => import('./routes/Home'))
const Flows = lazy(() => import('./routes/Flows'))
const Pending = lazy(() => import('./routes/Pending'))

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={clearance}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={Flows} />
              <Route exact path="/office" component={Pending} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
