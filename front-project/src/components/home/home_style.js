import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 1000px;
    margin: 20px auto;
    height: 300px;
`;

export const HomeLeft = styled.div`
    width: 690px;
    float: left;
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding 10px 0 15px 0;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    height: 32px;
    line-height: 32px;
    padding: 0 5px 0 5px;
    margin: 10px 10px;
    border: 1px solid #dcdcdc;
    background: #f7f7f7;
    font-size: 14px;
`;

export const ArticleList = styled.div`
    border-bottom: 1px solid #dcdcdc;
    width: 690px;
    min-height: 140px;
    .pic {
        width: 140px;
        height: 100px;
        float: right;
        margin: 20px 0;
    }
`;

export const ArticleInfo = styled.div`
    width: 540px;
    float: left;
   .desc {
       font-size: 13px;
       color: #999;
   }
`;

export const RecommendWrapper = styled.div`
    width: 280px;
    padding: 10px 0;
    border-bottom: 1px solid #dcdcdc;
`;

export const RecommendInfo = styled.div`
    margin: 5px 0;
    width: 280px;
    height: 50px;
    background: url(${(props) => (props.imgURI)});
    background-size: contain;
`;

export const TopNWrapper = styled.div`
    margin: 10px 0;
    width: 280px;
    height: 400px;
    border: 1px solid darkgrey;
`;

export const MoreList = styled.div`
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 600px;
    border-radius: 20px;
    background: #a5a5a5;
    margin: 15px auto;
    color: white;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    width: 50px;
    height: 50px;
    border: 1px darkgrey solid;
    right: 80px;
    bottom: 80px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
`;