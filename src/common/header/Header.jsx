import React, { PureComponent } from 'react'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store/index'
import { actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'
class Header extends PureComponent {
    getListArea(){
        const {handleChangePage,handleMouseEnter,focused,mouseIn,handleMouseLeave,list,page,totalPage}=this.props;
        const newList=list.toJS();
        const pageList=[];
        if(newList.length){
            for(let i=(page -1)*10; i<page*10;i++){
                pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>  
                );
            }
        }


        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</span>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                    
                </SearchInfo>
            )
        }else{
            return null;
        }
        
    }
    render() {
        let {focused,handleInputFocus,handleInputBlur,list,login,logout} =this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    {
                        login?
                        <NavItem className="right" onClick={logout}>退出</NavItem>:
                        <Link to="/login">
                            <NavItem className="right">登录</NavItem>
                        </Link>
                    }
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames="slide">
                            <NavSearch className={focused? 'focused': ''} 
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused?'iconfont zoom focused' :'iconfont zoom'}>&#xe614;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className="writting">
                            <span className="iconfont">&#xe615;</span>写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateProps=(state)=>({
    focused: state.getIn(['header','focused']),
    mouseIn: state.getIn(['header','mouseIn']),
    list: state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    login:state.getIn(['login','login'])
})

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(list){
            console.log(list);
            (list.size===0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Header)