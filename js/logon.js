// 检查账号
var a;
function checkusername(obj){
     if(/^(1[3|5|7|8]\d{9})||(\w{2,8}\@[a-z A-Z 0-9]{3,6}\.com)$/.test(obj.value)){
        a=1;
    }else{
        a=0;
    }
}
// 检查密码
var b;
function checkpassward(obj){
    if(/^[a-z A-Z 0-9]{8,10}$/.test(obj.value)){
         b=1;
    }else{
         b=0;
    }
}
// 检查重复密码
var c;
function checkRepassward(obj){
    if(obj.value==document.getElementById("passward").value){
        c=1;
    }else{
        c=0;
    }
}
// 信息全对数据提交
function checkRight(){
    if(a==1&&b==1&&c==1){
        getXMLHttpRequet();
        httpRequest.open("GET","http://192.168.0.25:8888/regsterUser?username="+document.getElementById("username").value+"&password="+document.getElementById("passward").value);
        httpRequest.onreadystatechange=function(){
             if(httpRequest.readyState==4&&httpRequest.status==200){
                 var d=httpRequest.responseText;
             }
        }
        httpRequest.send();
        alert("注册成功")
        localStorage.setItem("username",document.getElementById("username").value)
        localStorage.setItem("password",document.getElementById("passward").value)
    }else{
        alert("您输入的信息有误！")
    }
}
// 获得HTTP请求
var httpRequest;
function getXMLHttpRequet(){
    if(window.XMLHttpRequest){
        httpRequest=new XMLHttpRequest();
    }else{
        httpRequest=new ActiveXObject("Microsoft.XMLHTTP")
    }
}
// 如果已经有账号了，就直接登录
function goRegister(){
    location="register.html"
}