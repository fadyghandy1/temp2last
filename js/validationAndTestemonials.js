 var inputText =document.getElementById("update")
 var result =document.getElementById("result")
function ValidateEmail()
{ 

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.getElementById("result").innerHTML = "💪💪💪👏 valid email🤝🏼🤩🤩🥳";
document.getElementById("result").style.color = "green";
return true;
}
else
{

document.getElementById("result").innerHTML = " 😭😭😪😤invalid email😭😭😪😤";
document.getElementById("result").style.color = "red";

return false;
}


}
