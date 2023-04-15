import React from 'react'
import Loadable from 'react-loadable'

// 默认的 Loading
const loadingComponent = () => <div>loading</div>

export default function (loader, loading = loadingComponent) {
  return Loadable({
    loader, // 加载的组件
    loading,  // 加载组件没在加载出来的时候 展示一个 loading
  })
}
