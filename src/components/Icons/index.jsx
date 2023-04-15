import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import './styles.less'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2349099_jcdibybojlb.js',
})

export default function Icons (props) {
  const { type = '', className = '', style = {} } = props
  
  return (
    <IconFont 
      type={type} 
      className={className} 
      style={style}
    />
  )
}