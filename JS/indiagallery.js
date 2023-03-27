var imagesArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
 a=0
 function center()
 {
   document.getElementById("header").style.backgroundImage=`url(../Assets/Images/india/0.jpg)`
 }
function left()
{
   a--
 document.getElementById("header").style.backgroundImage=`url(../Assets/Images/india/${a}.jpg)`
 console.log(a)
 if(a==0)
 {
    a=20
 }
}
function right()
{
   a++
 document.getElementById("header").style.backgroundImage=`url(../Assets/Images/india/${a}.jpg)`
 console.log(a)
 if(a==20)
 {
    a=0
 }
}
//this is for gallery
var  img=document.getElementsByClassName("images");
console.log(img)
for(i=0;i<img.length;i++)
{
   img[i].src=`../Assets/Images/india/${i}.jpg`
}
function closeTheImage()
{
   document.getElementById("bigImage").setAttribute("style","display:none")
}
function openTheImage(img)
{
   document.getElementById("bigimg").setAttribute("src",`../Assets/Images/india/${img}.jpg`);
   document.getElementById("bigImage").removeAttribute("style")
}
function scroll1(){
   window.scrollTo({top:0, behavior:"smooth"})
}