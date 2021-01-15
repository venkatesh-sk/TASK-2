//jshint esversion:6

// create a request varialbe
var request=new XMLHttpRequest();

//create a new connection
request.open('GET',"https://restcountries.eu/rest/v2/all", true);
//3.sent request
request.send();
//4.load response
request.onload =function(){

    var data=JSON.parse(this.response);
    console.log(data);

   for(var i=0;i<=data.length;i++){
    console.log(data[i].name);
   }
   
};