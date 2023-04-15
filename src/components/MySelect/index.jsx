import React, { useState } from 'react'
import cs from 'classnames'
import { Select } from 'antd'

const { Option } = Select

export default function MySelect (props) {
  const { 
    data = [], 
    dropdownClassName = '', 
    className, 
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    disabled = false
  } = props
  
  const [cls, setCls] = useState(false)
  function handleChange(value) {
    console.log(`selected ${value}`)
  }
  const onSelect = () => setCls(!cls)

  return (
    <Select
      dropdownClassName={dropdownClassName}
      className={className}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      open={true}
      disabled={disabled}
      suffixIcon={
        <span className={cs('san', {'san-top': cls, 'san-bottom': !cls})} />
      }
    >
      {
        data.map(dt => 
          <Option key={dt.value} value={dt.value}>
            {dt.name}
          </Option>
        )
      }
    </Select>
  )
}


