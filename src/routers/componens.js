import React from 'react'
import Loadable from '@@/Loadable'

const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Cs1 = Loadable(() => import('@/pages/cs1'))
const Basic = Loadable(() => import('@/layouts/Basic'))

export {
  Home,
  Login,
  Cs1,
  Basic,
}
