import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import Login from './components/Login'
import Jobs from './components/Jobs'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
/*

*/

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/Jobs" component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
