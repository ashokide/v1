$(document).ready(function(){
    var state = "Tamil Nadu"
    var confirmdataE=document.getElementById("confirmtagE");
    var activedataE=document.getElementById("activetagE");
    var fataldataE=document.getElementById("fataltagE");
    var recoverdataE=document.getElementById("recovertagE");   

    const getCovidStatusErode = async()=> 
    {      
        var response = await fetch("https://api.covid19india.org/state_district_wise.json");
        var data = await response.json();
        console.log(data[state].districtData["Erode"]);
        confirmdataE.innerHTML=data[state].districtData["Erode"].confirmed;
        activedataE.innerHTML=data[state].districtData["Erode"].active;
        fataldataE.innerHTML=data[state].districtData["Erode"].deceased;
        recoverdataE.innerHTML=data[state].districtData["Erode"].recovered;
    }
    getCovidStatusErode();

});