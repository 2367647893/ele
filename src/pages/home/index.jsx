import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { setName } from '@/actions/home'

export default connect(state => {
  return {
    name: state.home.name,
  }
}, {
  setName,
})(Home)

function Home(props) {

  const {
    name = [],
    setName,
  } = props

  const onClick = () => {
    // 改变值
    setName({
      page: 1,
      limit: 5,
      token: 'Z3nwePrZR57jyjomjGNG896HWf4kRiBj',
    })
  }

  // console.log(name, 'name');

  return (
    <>
      <div className="box">
        <Button onClick={onClick}>请求接口</Button>
      </div>
    </>
  )
}

