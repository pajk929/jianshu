import React, { PureComponent } from 'react'
import  {Provider} from 'react-redux'
import {Globalstyle} from './style'
import {GlobalstyleIcon} from './statics/iconfont/iconfont'
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store/index'
import Header from './common/header/Header'
import Home from './pages/home/Home'
import Detail from './pages/detail/loadable'
import Login from './pages/login/Login'
import Write from './pages/write/Write'
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} ></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
        <Globalstyle />
        <GlobalstyleIcon />
      </Provider>
      
    )
  }
}

