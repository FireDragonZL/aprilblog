import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 62px;
    background: #eee;
`;

export const LoginBox = styled.div`
    margin: 50px auto;
    height: 400px;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    padding-top: 20px;
`;

export const LoginInput = styled.input`
    display: block;
    height: 36px;
    width: 220px;
    line-height: 36px;
    padding: 0 10px;
    margin: 0px auto;
`;

export const LoginBtn = styled.div`
    width: 244px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #3194d0;
    border-radius: 18px;
    margin: 10px auto;
`;
