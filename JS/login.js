var email="harish@gmail.com"
var pass="1234"
function autho()
{
    var usergivenUSID=document.getElementById("Email").value
    var usergivenPass=document.getElementById("pass").value
    if(email==usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("fom").setAttribute("action","../index.html")
        document.getElementById("but").setAttribute("type","submit")
    }
    else if(email!=usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("Email").style.border=" 3px solid red"
        document.getElementById("pass").style.border="3px solid rgb(106, 106, 130)"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,purple)"
        document.getElementById("result").innerHTML="Wrong Email ID"
    }
    else if(email==usergivenUSID && pass!=usergivenPass)
    {
        document.getElementById("Email").style.border="3px solid rgb(106, 106, 130)"
        document.getElementById("pass").style.border="3px solid red"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,rgb(225,1,111),red)"
        document.getElementById("result").innerHTML="Wrong Password"
    }
    else
    {
        document.getElementById("Email").style.border="3px solid red"
        document.getElementById("pass").style.border="3px solid red"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,red)"
        document.getElementById("result").innerHTML="Wrong Email And Password"
    }
}