// 登录数据提交
function register(){
    getXMLHttpRequet();
        httpRequest.open("GET","http://192.168.0.25:8888/login?username="+document.getElementById("username").value+"&password="+document.getElementById("password").value);
        httpRequest.onreadystatechange=function(){
             if(httpRequest.readyState==4&&httpRequest.status==200){
                 var d=httpRequest.responseText;
                 console.log(d);
             }
        }
        httpRequest.send();
        if(document.getElementById("username").value==localStorage.getItem("username")&&document.getElementById("password").value==localStorage.getItem("password")){
            alert("登录成功")
            location="shop.html"
        }else{
            alert("您输入的账号密码有误！")
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
// 没有账号先注册
function gologon(){
    location="logon.html"
}