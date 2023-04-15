import React from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { setData } from '@/actions/form'
import { setDataOption } from '@/actions/form'

export default @connect(state => ({
  data: state.form.data,
}), {
  setData,
  setDataOption,
})
class Forms extends React.Component {

  render () {
    return (
      <></>
    )
  }
}
