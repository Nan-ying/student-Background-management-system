export function nameRule(rule, value, callback) {
  // 4-10位用户名
  let reg = /(^[a-zA-Z0-9]{4,10}$)/;
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入4-10位用户名"));
  } else {
    callback();
  }
}

export function passRule(rule, value, callback) {
  // 6-12位密码，包含大小写字母、数字和特殊符号
  let pass =
    /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (!pass.test(value)) {
    callback(new Error("6-12位密码需包含大小写字母、数字和特殊符号"));
  } else {
    callback();
  }
}
