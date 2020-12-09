$(document).ready(function(){
    var confirmdataTN=document.getElementById("confirmtagTN");
    var testeddataTN=document.getElementById("testedtagTN");
    var fataldataTN=document.getElementById("fataltagTN");
    var recoverdataTN=document.getElementById("recovertagTN");   

    const getCovidStatusTN = async()=> 
    {      
        var response = await fetch("https://api.covid19india.org/v3/data.json");
        var data = await response.json();
        console.log(data);
        confirmdataTN.innerHTML=data.TN.total.confirmed;
        testeddataTN.innerHTML=data.TN.total.tested;
        fataldataTN.innerHTML=data.TN.total.deceased;
        recoverdataTN.innerHTML=data.TN.total.recovered;
    }
    getCovidStatusTN();

});