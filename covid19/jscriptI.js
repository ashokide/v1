$(document).ready(function(){

    var confirmdataI=document.getElementById("confirmtagI");
    var activedataI=document.getElementById("activetagI");
    var fataldataI=document.getElementById("fataltagI");
    var recoverdataI=document.getElementById("recovertagI");
    
      const getCovidStatusIndia = async() =>{
        var response= await fetch("https://api.covid19api.com/summary");
        var data = await response.json();
        console.log(data.Countries[76]);
        confirmdataI.innerHTML=data.Countries[76].TotalConfirmed;
        activedataI.innerHTML=data.Countries[76].NewConfirmed;
        fataldataI.innerHTML=data.Countries[76].TotalDeaths;
        recoverdataI.innerHTML=data.Countries[76].TotalRecovered;
      }
      
      getCovidStatusIndia();
});