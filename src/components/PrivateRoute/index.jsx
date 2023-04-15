import React from "react"
import { Route,withRouter,useHistory} from 'react-router-dom'

function PrivateRoute(Abc){
    return function (props){
        // 路由守卫
        // if (!localStorage.getItem('token')) {
        //     props.history.push('/login')
        // }
        return <Abc />
    }
}
export default PrivateRoute