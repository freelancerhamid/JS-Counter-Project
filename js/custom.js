var inputArea = document.getElementById("inputArea");
var total = document.getElementById("total");

function totalChar()
{
    totalInput = inputArea.value.length;
    total.innerHTML=`${totalInput}`;
}
