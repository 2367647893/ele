import React from 'react'
import { Modal } from 'antd'
import './styles.less'

export default function MyModal (props) {
  const { 
    children,
    title = '', 
    visible = false, 
    styles = {},
    cancelText,
    closable,
    footer
  } = props
  
  return (
    <div className="common-mymodal">
      <Modal
        visible={visible}
        title={title}
        bodyStyle={styles}
        cancelText={cancelText}
        closable={closable}
        footer={footer}
      >
        {children}
      </Modal>
    </div>
  )
}
