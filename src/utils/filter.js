export const dateFromat = (date, fmt) => {
    var o = {
        "M+": date.getMonth() + 1,                 //月份
        "d+": date.getDate(),                    //日
        "h+": date.getHours(),                   //小时
        "m+": date.getMinutes(),                 //分
        "s+": date.getSeconds(),                 //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export const timeAgo = (date) => {
    let dateTimeStamp = new Date(date);
    let minute = 1000 * 60
    let hour = minute * 60
    let day = hour * 24
    let halfamonth = day * 15
    let month = day * 30
    let now = new Date().getTime()
    let diffValue = now - dateTimeStamp
    if (diffValue < 0) {
        return
    }
    let monthC = diffValue / month
    let weekC = diffValue / (7 * day)
    let dayC = diffValue / day
    let hourC = diffValue / hour
    let minC = diffValue / minute
    let result = ""
    if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
    }
    else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
    }
    else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
    }
    else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
    }
    else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
    } else {
        result = "刚刚";
    }
    return result;
}

export const filterName = (str) => {
    var reg = /\"(.*?)\"/;
    var len = str.match(reg).length;
    for (var i = 0; i < len; i++) {
        var s = str.replace(s.match(reg)[0], '');
        return (RegExp.$1);
    }
}

export const transformTitleByType = (type) => {
    if(typeof(type) !== 'undefined'){
        if(type === 1){
            return "软件详情"
        } else if(type === 4){
            return "咨询详情"
        }
    }
    return "咨询详情"
}
