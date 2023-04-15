import React from 'react'

// 高阶组件是参数为组件，返回值为新组件的函数。
export default function WithSubscription (WrappedComponent) {
  return class extends React.Component {
    state = {
      xy: {
        x: 0,
        y: 0,
      }
    }

    componentDidMount () {
      document.addEventListener('mousemove', evt => {
        this.setState({
          xy: {
            x: evt.clientX,
            y: evt.clientY,
          }
        })
      })
    }

    render () {
      const { xy } = this.state

      return (
        <WrappedComponent xy={xy} />
      )
    }
  }
}
