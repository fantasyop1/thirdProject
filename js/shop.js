
// 获取服务器对象
function getXMLHttpRequet() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject("Microsoft,XMLHTTP")
    }
}
// 轮播放图片
function change() {
    var httpRequest = getXMLHttpRequet();
    httpRequest.open("GET", "http://192.168.0.25:8888/showImages")
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var a = httpRequest.responseText;
            var b = JSON.parse(a);
            bb(b)
        }
    }
    httpRequest.send();
}
// 计时器
var c = 0;
var ff;
function bb(pp) {
    if (pp != null && pp !== undefined && pp != "") {
        ff = pp
    }
    document.getElementById("changeimg").src = "http://192.168.0.25:8888/" + ff[c].img
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        var t = document.getElementsByTagName("li")[i]
        if (i == c) {
            t.style.backgroundColor = "white"
        } else {
            t.style.backgroundColor = "grey"
        }
        if (i == 5) {
            i = 0;
        }
    }
    c++;
    if (c == 5) {
        c = 0;
    }
    setTimeout("bb()", 1000)
}
// 获取服务器AD信息
function ad() {
    var httpRequest = getXMLHttpRequet();
    httpRequest.open("GET", "http://192.168.0.25:8888/showADBooks")
    httpRequest.onreadystatechange = function () {

        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var a = httpRequest.responseText;
            var b = JSON.parse(a);
            console.log(b);
            addad(b);

        }
    }
    httpRequest.send();
}
ad();
// 动态广告
function addad(p) {
    for (var i = 0; i < p.length; i++) {
        var newp = document.createElement("p")
        var newp1 = document.createElement("p")
        var newp2 = document.createElement("p")
        var newp3 = document.createElement("p")
        newp.innerHTML = "<img src='" + "http://192.168.0.25:8888/" + p[i].img + "'>"
        newp1.innerHTML = "￥120"
        newp1.style.color = "red"
        newp2.innerHTML = "宝宝打招呼合集"
        newp3.innerHTML = "共计2W+评价"
        document.getElementById("bottom").appendChild(newp)
        document.getElementById("bottom").appendChild(newp1)
        document.getElementById("bottom").appendChild(newp2)
        document.getElementById("bottom").appendChild(newp3)
    }
}
// 获取服务器book信息
function book() {
    var httpRequest = getXMLHttpRequet();
    httpRequest.open("GET", "http://192.168.0.25:8888/getBooks")
    httpRequest.onreadystatechange = function () {

        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var a = httpRequest.responseText;
            var b = JSON.parse(a);
            addbook(b);
            

        }
    }
    httpRequest.send();
}
book();
// 动态书本
function addbook(p) {
    for (var i = 0; i < p.length; i++) {
        var div=document.createElement("div")
        var anewp = document.createElement("p")
        var anewp1 = document.createElement("p")
        var anewp2 = document.createElement("p")
        var anewp3 = document.createElement("p")
        var anewp4 = document.createElement("p")
        anewp.innerHTML = "<img src='" + "http://192.168.0.25:8888/" + p[i].img + "'onclick='godetail(this)'>"
        anewp.style.marginTop="5px"
        anewp1.innerHTML = "￥" + p[i].price
        anewp1.style.color = "red"
        anewp2.innerHTML = p[i].name
        anewp2.style.fontSize="12px"
        anewp3.innerHTML = "<span class='span'>自营</span><span class='span1'>放心购</span><span class='span2'>秒杀</span>"
        anewp4.innerHTML = "<span class='span3' onclick='gocar(this)'>加入购物车</span>"
        div.appendChild(anewp)
        div.appendChild(anewp1)
        div.appendChild(anewp2)
        div.appendChild(anewp3)
        div.appendChild(anewp4)
        document.getElementById("righttop").appendChild(div)
    }
}
// 本地存储
if(localStorage.getItem("book")==null){
    localStorage.setItem("book","[]");
}
// 加入购物车
function gocar(obj){
    if(localStorage.getItem("username")==null){
        alert("您还未登录！")
        location="../html/register.html"   
    }else{
        var c=obj.parentNode.parentNode.children[2].innerHTML;
        if(checkbook(c,JSON.parse(localStorage.getItem("book")))){
            var a=JSON.parse(localStorage.getItem("book"))
            var f={name:obj.parentNode.parentNode.children[2].innerHTML,price:obj.parentNode.parentNode.children[1].innerHTML,img:obj.parentNode.parentNode.firstChild.firstChild.src,n:1}
            a.push(f)
            a=JSON.stringify(a)
            alert("加入购物车成功！")
            localStorage.setItem("book",a)
        }else{
            alert("您已添加过该商品，请勿重复添加！")
        }

    }    
}
// 检查书本是否已经存在
function checkbook(name,book){
        var flag=true;
        for(var i=0;i<book.length;i++){
            if(book[i].name==name){
                flag=false;
                break;
            }
        }
        return flag
}
// 显示详情
function godetail(obj){
    localStorage.setItem("img","[]");
    var a=JSON.parse(localStorage.getItem("img"))
    var f={name:obj.parentNode.parentNode.children[2].innerHTML,price:obj.parentNode.parentNode.children[1].innerHTML,img:obj.src}
    a.push(f)
            a=JSON.stringify(a)
            localStorage.setItem("img",a)
    location="detail.html"
    
}