import React from 'react'
import Footer from '../most used/Footer/Footer'
import Header from '../most used/Header/Header'
import Home from '../Home/Home'
import Packages from '../Packages/Packages'
import PackageDetail from '../Package detail/packageDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Contact from '../Contact/Contact'
import Book from '../Book/Book'
import Login from '../account/login/login'
import Register from '../account/register/register'
import Ethiopia from '../Ethiopia/Ehtiopia'
import About from '../About us/About'


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
        <Route exact path='/login'>
            <Login />
        </Route>
        <Route exact path='/register'>
            <Register />
        </Route>
        <Route exact path='/package'>
          <Packages/>
        </Route>
        <Route path='/package/:id'>
          <PackageDetail/>
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/book'>
          <Book />
        </Route>
        <Route path='/ethiopia'>
          <Ethiopia />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        </Switch>
        </div>
          <Footer />
      </div>
    </Router>
    )
}

export default Content