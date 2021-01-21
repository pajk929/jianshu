import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent =Loadable({
    loader:()=>import('./Detail.jsx'),
    loading(){
        return <div>正在加载</div>
    }
});
const test=()=><LoadableComponent/>
export default test