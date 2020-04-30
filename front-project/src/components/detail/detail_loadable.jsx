import React from 'react'
import Loadable from 'react-loadable';

// 将 detail 组件变为异步组件
const LoadableBar = Loadable({
    loader: () => import('../../contain/detailContain'),
    // 页面加载时调用的函数
    loading() {
        return <div>detail Loading...</div>
    }
});

// 返回一个无状态组件
export default () => <LoadableBar />;