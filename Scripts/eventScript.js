function removeElementsByClass(){
    var elements = document.getElementsByClassName("historyChild");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
function EraseHistory()
{
    removeElementsByClass();
                //while(document.getElementById("historyValues").hasChildNodes)
                //{
                //    document.getElementById("historyValues").removeChild(document.getElementsByClassName("historyChild")[0]);
                //}
}
function historyValues()
{
    let p = document.createElement("p");
    p.className = "historyChild";
    p.innerHTML= document.getElementById("labelCount").innerHTML + " ";
    document.getElementById("historyValues").append(p);
}
function minus()
{
    historyValues();
    document.getElementById("labelCount").innerHTML --;
}    
function plus()
{
    historyValues();
    document.getElementById("labelCount").innerHTML ++;
}
function ResetCount()
{
    historyValues();
    document.getElementById("labelCount").innerHTML=0;
}

function reset()
{
    document.getElementById("onOff").value = "Off";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function onOff()
{
    let ele =  document.getElementById("onOff").value;
    if( ele == "On")
    {
        document.getElementById("onOff").value = "Off";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else
    {
        document.getElementById("onOff").value = "On";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}