import React from 'react'
import { Switch, Route, withRouter,NavLink } from 'react-router-dom'
import PrivateRoute from '@@/PrivateRoute' //路由守卫
import { Home,Cs1 } from '@/routers/componens'

function Basic(props) {
  return (
    <div className="layouts-basic">
      <h1>Menu</h1>
      {/* Switch 必须有 */}
      {/* 嵌套路由 */}
      <NavLink to='/user/x2?xxx=111&zzz=222'>跳Cs1</NavLink>
      <NavLink to='/user/x1'>跳Home</NavLink>

      <Switch>
        {/* 出口文件 */}
        <Route path="/user/x1/:id" component={Home} />
        <Route path="/user/x1" component={Home} />
        <Route path="/user/x2" component={Cs1} />
        
      </Switch>
    </div>
  )
}
// export default Basic
export default PrivateRoute(Basic)