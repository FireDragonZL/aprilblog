import { GETLOGINSTATE, LOGOUT } from './action_types'

export const getLoginState = (accoutEle, pwdEle) => {
    return dispatch => {
        fetch("/api/loginState.json?accout=" + accoutEle + "&pwd=" + pwdEle)
        .then((res) => {
            return res.json()
        }).then((data) => {
            // 登录成功则修改状态
            if (data.data) {
                dispatch(actionCreater())
            } else {
                alert("登录失败！")
            } 
        })
    }
}

const actionCreater = () => ({
    type: GETLOGINSTATE,
    data: true
})

export const logOut = () => ({
    type: LOGOUT,
    data: false
})