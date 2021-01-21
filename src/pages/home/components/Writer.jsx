import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { actionCreators } from '../store'
import {WriterWapper,WriterSwitch,WriterItem,WriterInfo} from '../style'
class Writer extends PureComponent {
    render() {
        let {list,page,totalPage,handleChangePage}=this.props

        const newList=list.toJS();
        const pageList=[];
        if(newList.length){
            for(let i=(page-1)*5;i<page*5;i++){
                pageList.push(
                    <WriterItem key={newList[i].id}>
                        <img src={newList[i].imgUrl} className="pic" alt=""/>
                        <WriterInfo>
                            <p className="title">{newList[i].title}</p>
                            <p className="desc">{newList[i].desc}</p>
                        </WriterInfo>
                        <span>+关注</span>
                    </WriterItem>
                );
            }
        }
        return (
            <WriterWapper>
                <span>推荐作者</span>
                <WriterSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                    <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</span>
                    换一批
                </WriterSwitch>
                {pageList}
            </WriterWapper>
        )
    }
}

const mapDispatch=(dispatch)=>{
    return {
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform='rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','writerList']),
    page:state.getIn(['home','page']),
    totalPage:state.getIn(['home','totalPage'])
})

export default connect(mapState,mapDispatch)(Writer)