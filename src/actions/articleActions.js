/**
 * @file 写文章
 * @author yuchao03
 */



// 加载表单数据
export const FETCH_FORM_GET = 'FETCH_FORM_GET';




// xhr响应失败
function doHttpReject(textStatus, errorMsg) {
    return {
        type: HTTP_REJECT,
        textStatus,
        errorMsg
    };
}
// 业务响应非0 code
function doBusinessReject(res) {
    return {
        type: BUSINESS_REJECT,
        res
    };
}

// 发起form数据请求
function doFetchForm(params) {
    return {
        type: FETCH_FORM_GET,
        params
    };
}
// form数据响应成功
function doFetchFormReceive(res) {
    return {
        type: FETCH_FORM_RECEIVE,
        res
    };
}

// 发起提交form数据请求
function doSubForm(formData, isAutoSave) {
    return {
        type: SUB_FORM_POST,
        formData,
        isAutoSave: isAutoSave
    };
}

// 更新表单
function doUpForm(formData) {
    return {
        type: UP_FORM,
        formData
    };
}

// 提交fomr数据响应
function doSubFormReceive(res, formData) {
    return {
        type: SUB_FORM_RECEIVE,
        res,
        formData
    };
}


// 更新封面图
export function upContentCoverImg(data) {
    return dispatch => {
        return dispatch({
            type: UP_CONTENT_COVERIMG,
            pageData: data
        });
    };
}


// 请求表格数据
export function fetchForm(params) {
    return dispatch => {
        dispatch(doFetchForm(params));
        return $.iPost($.urlData.article.editView, {articleId: params})
            .done(res => {

                if (res.errno === 0) {
                    dispatch(doFetchFormReceive(res));
                } else {
                    console.log('错误码异常:' + res.errno);
                    dispatch(doBusinessReject(res));
                }

            })
            .fail((jqXhr, textStatus, errorMsg) => dispatch(doHttpReject(textStatus, errorMsg)));
    }
}

// 更新表单
export function upForm(formData) {
    return dispatch => {
        dispatch(doUpForm(formData));
    };
}

// 提交form数据
export function subForm(formData, isSubmit, isAutoSave) {
    return dispatch => {
        dispatch(doSubForm(formData, isAutoSave));

        let postData = $.extend(true, {}, formData);
        postData.tags = JSON.stringify(postData.tags);
        postData.cover = JSON.stringify(postData.cover);
        return $.iPost($.urlData.article.addArticle, postData)
            .done(res => {


                if (res.errno === 0 && isSubmit) {
                    window.location.href = $.urlData.articleList.darenIndex('articleType=1');
                } else if (res.errno === 0) {
                    dispatch(doSubFormReceive(res, formData));

                }
                else {
                    dispatch(doBusinessReject(res, formData));
                }

            })
            .fail((jqXhr, textStatus, errorMsg) => dispatch(doHttpReject(textStatus, errorMsg)))
    };
}