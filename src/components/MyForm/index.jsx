import React from 'react'
import { Form, Input, Button, Select } from 'antd'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

function Myselect (props) {
  return (
    <Select>
      {
        props.opt.option.map(v => {
          <option key={v}>{v}</option>
        })
      }
    </Select>
  )
}

const obj = {
  select: opt => <Myselect opt={opt} />,
  input: () => <Input />,
}

export default function MyForm (props) {
  const { data } = props

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {
        data.map(dt => {
          return <Form.Item
            key={dt.id}
            label={dt.label}
            name={dt.name}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            {obj[dt.type](dt)}
          </Form.Item>
        })
      }
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
