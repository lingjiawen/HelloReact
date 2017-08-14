import React from 'react';       //引入react

//创建组件类：名字首字母必须大写
class Hello extends React.Component {
    render() {
        return (
            <div>Hello React!</div>
        )
    }
}

//导出组件
export default Hello;