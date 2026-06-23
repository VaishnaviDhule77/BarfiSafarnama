let ml=0;
setInterval(function()
{
    document.getElementById("slider").style.transition="2s"
    document.getElementById("slider").style.marginLeft=-ml+"%";
    ml=ml+100;
    if(ml>600)
    {
        setTimeout(function()
    {
        document.getElementById("slider").style.transition="0s"
        document.getElementById("slider").style.marginLeft=0;
        ml=100;
    },2000)
    }
},3000)