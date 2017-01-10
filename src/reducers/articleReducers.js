/**
 * @file [文章页reducer]
 * @author [yuchao03]
 * state控制器，根据actions枚举控制state.（做成什么样）
 */

import {
    FETCH_FORM_GET


} from '../actions/articleActions.js';






// 标注state定义
// isLoading 数据请求中
// isSubing 表单提交中
// isValidate 表单校验是否成功
// code 接口返回数据状态
// codeMsg 接口返回msg消息
// errorStatus HTTP接口抛错状态吗
// errorMsg HTTP抛错信息
let articleState = {
    isLoading: false, // 页面数据加载中， ajaxq请求中
    isSubing: false, // 提交中
    isValidate: false // 是否校验通过

};

let defaultState = {
    code: null,
    codeMsg: '',
    errorStatus: null,
    errorMsg: ''
};


function extend(des, src, override){
    if(src instanceof Array){
        for(var i = 0, len = src.length; i < len; i++)
            extend(des, src[i], override);
    }
    for( var i in src){
        if(override || !(i in des)){
            des[i] = src[i];
        }
    }
    return des;
}

export default function articleReducer(state = articleState, action) {


    switch (action.type) {
        case FETCH_FORM_GET:
            return extend(true, {}, state, {
                isLoading: true
            }, defaultState);



        default:
            return state;

    }
}
