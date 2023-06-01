console.clear();

var Email=document.getElementById("email");
var button=document.getElementById("btn2");
var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var color=document.getElementById("change");
var M1=document.getElementById("menu1");
var M2=document.getElementById("menu2");
var M3=document.getElementById("menu3");
var BTN1=document.getElementById("btn1");
var F1=document.getElementById("f1");
var F2=document.getElementById("f2");
var F3=document.getElementById("f3");
var BTN2=document.getElementById("btn2");

button.onclick=function(){
    if(!Email.value.match(pattern)){
        color.style.display="block";
    }else{

    }
}
M1.onmousemove=function(){
    M1.style.textDecoration="underline";
}
M1.onmouseout=function(){
    M1.style.textDecoration="none";
}
M2.onmousemove=function(){
    M2.style.textDecoration="underline";
}
M2.onmouseout=function(){
    M2.style.textDecoration="none";
}
M3.onmousemove=function(){
    M3.style.textDecoration="underline";
}
M3.onmouseout=function(){
    M3.style.textDecoration="none";
}
BTN1.onmousemove=function(){
    BTN1.style.backgroundColor="hsl(198, 60%, 50%)";
    BTN1.style.borderColor="hsl(198, 60%, 50%)";
}
BTN1.onmouseout=function(){
    BTN1.style.backgroundColor="hsl(176, 68%, 64%)";
    BTN1.style.borderColor="hsl(176, 68%, 64%)";
}
F1.onmousemove=function(){
    F1.style.backgroundColor="hsl(176, 68%, 64%)";
}
F1.onmouseout=function(){
    F1.style.backgroundColor="white";
}
F2.onmousemove=function(){
    F2.style.backgroundColor="hsl(176, 68%, 64%)";
}
F2.onmouseout=function(){
    F2.style.backgroundColor="white";
}
F3.onmousemove=function(){
    F3.style.backgroundColor="hsl(176, 68%, 64%)";
}
F3.onmouseout=function(){
    F3.style.backgroundColor="white";
}
BTN2.onmousemove=function(){
    BTN2.style.backgroundColor="hsl(198, 60%, 50%)";
    BTN2.style.borderColor="hsl(198, 60%, 50%)";
}
BTN2.onmouseout=function(){
    BTN2.style.backgroundColor="hsl(176, 68%, 64%)";
    BTN2.style.borderColor="hsl(176, 68%, 64%)";
}