import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {RecommendWapper,RecommendItem} from '../style'
class Recommend extends PureComponent {
    render() {
        let {list} =this.props
        return (
            <RecommendWapper>
                {
                    list.map(item=>{
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                        )
                    })
                }
            </RecommendWapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend)