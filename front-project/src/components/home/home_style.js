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
    width: 290px;
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