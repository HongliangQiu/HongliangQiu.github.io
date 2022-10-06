let changeUserNameBtn = document.querySelector("#changeUserNameBtn");
let clearUserNameBtn = document.querySelector("#clearUserNameBtn");
let myHeading = document.querySelector("h1");

let userName = window.localStorage.getItem("userName");
if (!userName) {
  setUserName();
} else {
  setWelcomeMsg(userName);
}

changeUserNameBtn.onclick = function () {
  setUserName();
};

clearUserNameBtn.onclick = function () {
  if (!confirm("确定删除用户？")) {
    return;
  }
  
  deleteUserName();
};

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    alert("输入数据无效");
    return;
  }
  window.localStorage.setItem("userName", myName);
  setWelcomeMsg(myName);
}

function deleteUserName() {
  window.localStorage.removeItem("userName");
  setWelcomeMsg("");
}

function setWelcomeMsg(userName) {
  myHeading.textContent = "你好" + userName;
}

// document.querySelector('html').onclick = function () {
//     alert(myHeading.textContent);
// }
