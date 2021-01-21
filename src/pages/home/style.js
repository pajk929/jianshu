import styled from 'styled-components';
export const HomeWrapper=styled.div`
    overflow:hidden;
    width:960px;
    margin: 0 auto;
`;
export const HomeLeft=styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight=styled.div`
    width:280px;
    float:right;
`;
export const TopicWrapper=styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem=styled.div`
    float:left;
    background:#f7f7f7;
    margin-left:18px;
    margin-bottom:18px;
    height:32px;
    line-height:32px;
    padding-right:10px;
    font-size: 14px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const ListItem=styled.div`
    overflow:hidden;
    padding:20px 0px;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius: 10px;
    }
`;
export const ListInfo=styled.div`
    width: 500px;
    float:left;
    .title{
        font-size: 18px;
        line-height: 27px;
        font-weight:bold;
        color:#333333;
    }
    .desc{
        line-height:24px;
        font-size: 13px;
        color:#999999;
    }
`;
export const LoadMore=styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius: 20px;
    color:#fff;
    cursor:pointer;
`;
export const RecommendWapper=styled.div`
    margin:30px 0;
    width: 280px;
`;
export const RecommendItem=styled.div`
    width: 280px;
    height: 50px;
    background:url(${props=>props.imgUrl});
    background-size:contain;
`;
export const WriterWapper=styled.div`
    width:278px;
    border-radius: 3px;
    height: 300px;
    span{
        font-size: 14px;
        color: #969696;
        text-align:left;
    }
`;
export const WriterSwitch=styled.div`
    float:right;
    font-size:14px;
    cursor:pointer;
    color:#969696;
    .spin {
        display:block;
        float:left;
        font-size:12px;
        margin-top:2px;
        margin-right:4px;
        transition: all .4s ease-in;
        transform-origin: center center;
    }
`;
export const WriterItem=styled.div`
    overflow:hidden;
    padding: 10px 0px;
    .pic{
        width: 46px;
        height:46px;
        float:left;
        border-radius:50%;
    }
    span{
        float:right;
        font-size: 13px;
        color:#42c02e;
        line-height:27px;
    }
`;
export const WriterInfo=styled.div`
    width: 180px;
    float:left;
    margin-left:5px;
    .title{
        padding-top:5px;
        font-size: 14px;
        color:#333333;
        line-height: 27px;
    }
    .desc{
        margin-top:2px;
        font-size: 12px;
        color :#969696;
        line-height: 10px;
    }
`;
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align:center;
    border: 1px solid #ccc;
    font-size: 14px;
`