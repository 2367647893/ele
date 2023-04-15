import React from 'react'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'
import { Basic,Login,Form } from './componens'

export default function Router () {
  return (
    // 路由最外层必须 BrowserRouter histroy
    <BrowserRouter>
      {/* 必须写 */}
      <Switch>
        {/* BasicLayout */}
        <Route path="/user" component={Basic} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
