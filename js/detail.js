// 检查BOOK本地存储
if(localStorage.getItem("book")==null){
    localStorage.setItem("book","[]");
}
// 加入购物车
function gocar(obj){
    if(localStorage.getItem("username")==null){
        alert("您还未登录！")
        location="../html/register.html"   
    }else{
        var c=localStorage.getItem("img"); 
        if(checkbook(JSON.parse(c)[0].name,JSON.parse(localStorage.getItem("book")))){
        var books=JSON.parse(localStorage.getItem("book"))
         books.push(c)
         localStorage.setItem("book",books);
        }
    }   
}
// 动态更新信息
function showdetail(){
    var c=JSON.parse(localStorage.getItem("img"));
    document.getElementById("img").src=c[0].img
    document.getElementById("name").innerHTML=c[0].name;
    document.getElementById("price").innerHTML=c[0].price;
}
// 检查是否已经添加过该书本
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
