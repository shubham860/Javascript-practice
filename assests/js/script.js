var d = new Date;
var h = d.getHours();

if(h<18&&h>6)
{
document.getElementById("j1").style.backgroundRepeat = "no-repeat";
document.getElementById("j1").style.backgroundSize = "cover";
document.getElementById("j1").style.color="white";
}
else{

document.getElementById("j1").style.backgroundRepeat = "no-repeat";
document.getElementById("j1").style.backgroundSize = "cover";
document.getElementById("j1").style.color="white";


}

function Report(){
  var location=document.getElementById("input").value;
  if(location=="")
 {
   alert("Enter the city name");
 }
  else{
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json';
  var obj = new XMLHttpRequest();
  obj.onreadystatechange = function(){
    if(obj.readyState=4)
      {
         var data = JSON.parse(obj.responsetext);
         var x=data.query.results.channel.item.condition.temp;
              x=(5*(x-32))/9;
         var y=data.query.results.channel.wind.speed;
          var z=data.query.results.channel.atmosphere.humidity;
          var a=data.query.results.channel.item.forecast;
               var hi=a[0].high;
                 hi=(5*(hi-32))/9;
                var lo=a[0].low;
                 lo=(5*(lo-32))/9;
               var  hi1=a[1].high;
                  hi1=(5*(hi1-32))/9;
                var lo1=a[1].low;
                 lo1=(5*(lo1-32))/9;
                 document.getElementById("today").style.display="block";
                 document.getElementById("tom").style.display="block";
                 document.body.style.backgroundAttachment = "fixed";
         document.getElementById("temp").innerHTML = 'Temperature:' +  Math.floor(x) + '&deg;'+'C';
         document.getElementById("wind").innerHTML = 'Wind:' +  y +' mph';
          document.getElementById("humidity").innerHTML = 'Humidity:' +  z +'%';
                           document.getElementById("high").innerHTML ='High:' + Math.floor(hi) +"&deg;C";
                            document.getElementById("text").innerHTML = a[0].text;
                            document.getElementById("low").innerHTML ='Low:' + Math.floor(lo) +"&deg;C";
                     document.getElementById("high1").innerHTML ='High:' + Math.floor(hi1) +"&deg;C";
                            document.getElementById("text1").innerHTML = a[1].text;
                            document.getElementById("low1").innerHTML ='Low:' + Math.floor(lo1) +"&deg;C";

       }
     }
  }
function Reset(){
   location.reload();
}
