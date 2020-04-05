import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 1000px;
    margin: 20px auto;
    height: 300px;
`;

export const HomeLeft = styled.div`
    width: 690px;
    float: left;
    border: 1px solid #ddd;
`;

export const HomeRight = styled.div`
    width: 290px;
    float: right;
    border: 1px solid #ddd;
`;

export const TopicWrapper = styled.div`
    padding 20px 0 15px 0;
    display: flex;
    flex-wrap: wrap;
`;

export const TopicItem = styled.div`
    height: 32px;
    line-height: 32px;
    padding: 0 5px 0 5px;
    margin: 10px 15px;
    border: 1px solid #dcdcdc;
    background: #f7f7f7;
    font-size: 14px;
`;