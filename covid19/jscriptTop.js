$(document).ready(function(){
    var usadata=document.getElementById("usadata");
    var brazildata=document.getElementById("brazildata");
    var russiadata=document.getElementById("russiadata");
    var indiadata=document.getElementById("indiadata");
    var ukdata=document.getElementById("ukdata");

    const getCovidstatusWorldTop = async() =>{
      var response= await fetch("https://api.covid19api.com/summary");
      var data = await response.json();
      console.log(data.Countries);
      usadata.innerHTML=data.Countries[177].TotalConfirmed;
      brazildata.innerHTML=data.Countries[23].TotalConfirmed;
      russiadata.innerHTML=data.Countries[138].TotalConfirmed;
      indiadata.innerHTML=data.Countries[76].TotalConfirmed;
      ukdata.innerHTML=data.Countries[176].TotalConfirmed;
    }
    getCovidstatusWorldTop();
});