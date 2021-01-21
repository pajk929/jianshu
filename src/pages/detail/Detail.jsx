import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { DetailWapper,Header,Content} from './style'
import {actionCreators} from './store'
class Detail extends PureComponent {
    render() {
        return (
            <DetailWapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
            </DetailWapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})
export default connect(mapState,mapDispatch)(withRouter(Detail)) 
// 将不是路由的组件 变成路由组件