import styled from 'styled-components'

import logoPic from '../../static/logo.png'

export const HeaderBody = styled.div`
    height: 56px;
    border-bottom: 2px #f0f0f0 solid;
`;

export const HeaderWrapper = styled.div`
    hieght: 56px;
    margin: 0 auto;
    min-width: 1200px;
    max-width: 1440px;
    display: flex;
    justify-content: space-around;
`;

export const HeaderLogo = styled.a.attrs({
    href: "#"
})`
    float: left;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    /* 将图片在背景样式中固定大小 */
    background-size: contain;
`;

export const Nav = styled.div`
    height: 56px;
    width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;

export const NavItem = styled.a.attrs({
    href: "#"
})`
    height: 56px;
    line-height: 56px;
    font-size: 17px;
    padding: 0 15px;
    color: #969696;
    /* & 表示同级的意思 */
    &.active {
        color: #ea6f5a;
    }

    &.download {
        color: #333;
    }
`;

export const NavSearch = styled.div`
    height: 56px;
    position: relative;
    /* 通过绝对定位和相对定位固定图标的位置 */
    .iconfont {
        right: 5px;
        bottom: 13px;
        position: absolute;
        width:30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        /* 当iconfont属性存在focused时 */
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const SearchWrapper = styled.input.attrs({
    placeholder: "搜索"
})`
    height: 36px;
    width: 160px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 18px;
    border: none;
    outline: none;
    font-size: 14px;
    background: #eee;
    /* 对标签属性进行样式重叠 */
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:220px;
    }
    /* 为动画挂载入场样式：ease-out为滑动效果 */
    &.slide-enter {
        transition: All .2s ease-out
    }
    &.slide-enter-active {
        width: 220px
    }
    /* 为动画卸载出场样式 */
    &.slide-exit {
        transition: All .2s ease-out
    }
    &.slide-exit-active {
        width: 160px
    }
`;

export const NavEmpty = styled.div`
    flex-grow: 2;
`;

export const HeaderAddition = styled.div`
    height: 56px;
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 50px;
    outline:none;

    &.register {
        padding-left: 24px;
        padding-right: 24px;
        color: #ec7259;
        background-color: #fff;
        border: 1px solid #ec7259;
    }
    &.writing {
        margin-left: 8px;
        background-color: #ec7259;
        border: 1px solid #ec7259;
    }
`;
