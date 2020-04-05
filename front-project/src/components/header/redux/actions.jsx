/**
 * action对象包含状态更改类型和状态更改数据
 */
import {INPUTBLUR, INPUTFOCUS} from './action_types'

// 获取焦点
export const headInputFocus = () => ({ type: INPUTFOCUS, data: "" })
// 失去焦点
export const headInputBlur = () => ({ type: INPUTBLUR, data: "" })