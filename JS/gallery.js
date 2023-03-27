var imagesArray=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
 i=Math.floor(Math.random()*16)
function back()
{
 document.getElementById("header").style.backgroundImage=`url(../Assets/Images/${i}.jpg)`
 console.log(i)
 i=Math.floor(Math.random()*16)
}
setInterval(back,2000)
