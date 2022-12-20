//用户名匹配
export function nameRoule(rule, value, callback) {
    // 请输入4-10位昵称
    let reg = /(^[a-zA-Z0-9]{4,10}$)/;
    if (value === "") {
        callback(new Error("请输入用户名"));
    } else if (!reg.test(value)) {
        callback(new Error("请输入4-10位用户名"));
    } else {
        callback();
    }
}
//密码匹配规则
export function passwordRoul(rule, value, callback) {
    // 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    let pass = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    if (value === "") {
        callback(new Error("请输入密码"));
    } else if (!pass.test(value)) {
        callback(new Error("密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"));
    } else {
        callback();
    }
}