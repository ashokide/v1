$(document).ready(function(){
    var confirmdataW=document.getElementById("confirmtagW");
    var activedataW=document.getElementById("activetagW");
    var fataldataW=document.getElementById("fataltagW");
    var recoverdataW=document.getElementById("recovertagW");

    const getCovidStatusWorld = async() =>{
        var response= await fetch("https://api.covid19api.com/summary");
        var data = await response.json();
        console.log(data);
        confirmdataW.innerHTML=data.Global.TotalConfirmed;
        activedataW.innerHTML=data.Global.NewConfirmed;
        fataldataW.innerHTML=data.Global.TotalDeaths;
        recoverdataW.innerHTML=data.Global.TotalRecovered;
      }
      
      getCovidStatusWorld();
});