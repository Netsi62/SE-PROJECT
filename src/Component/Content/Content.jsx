import React from 'react'
import Footer from '../most used/Footer/Footer'
import Header from '../most used/Header/Header'
import Home from '../Home/Home'
import Packages from '../Packages/Packages'
import PackageDetail from '../Package detail/packageDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Content = () => {
  return (
    <Router>
      <div className="content">
        <Header />
        <div className="switch-con">
        <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/package'>
          <Packages/>
        </Route>
        <Route path='/package/:id'>
          <PackageDetail/>
        </Route>
        </Switch>
        </div>
          <Footer />
      </div>
    </Router>
    )
}

export default Content