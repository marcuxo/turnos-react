import { Fragment } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import Login from './component/Login'
import List from './component/List'
import PageNotFound from './component/PageNotFound'

function App() {
  return (
    <Router>
      <div>
        {/* <div>
          <nav>
            <ul>
              <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div> */}
        <Switch>
          <Route exact path="/login" component={List} />

          <Route component={PageNotFound} />
        </Switch>
        
        
      </div>
    </Router>
  )
  
}

export default App;
