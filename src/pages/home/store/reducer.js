import * as constants from './constants'
import { fromJS } from 'immutable'
const defauleState= fromJS({
    topicList:[],
    articleList:[],
    articlePage:1,
    recommendList:[],
    writerList:[],
    page:1,
    totalPage:0,
    showScroll: false
});

const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        writerList:fromJS(action.writerList),
        totalPage:fromJS(Math.ceil(action.writerList.length/5))
    })
}
const addArticleList=(state,action)=>{
    return state.merge({
        articleList:state.get('articleList').concat(action.list),
        articlePage:action.nextPage
    })
}

const reducer =(state=defauleState,action={})=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default:
            return state
    }
}
export default reducer