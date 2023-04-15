import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import qs from 'qs'
import './styles.less'

export default function Cs1 (props) {

  // 获取路由上的值
  var xx=qs.parse(_.get(props,'location.search',''),{ignoreQueryPrefix:true})
  console.log(xx,'xxx');
  
  useEffect(() => {

  }, [])


  return (
    <div>
      cs1页面
    </div>
  )
}
