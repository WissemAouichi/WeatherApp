var city="abc";

myFunction();

function myFunction() {
    var form = document.getElementById("frm1");
    var text = "";
    text += form.elements[0].value;
    city= text;

  console.log(city);

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=6df81b18f188eb61c7761f191f5f010e",
  function(data){
  console.log(data);
  
  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var weather = data.main.temp
  var description= data.weather[0].description;
  
  $(".icon").attr("src", icon);
  $(".weather").text(weather);
  $(".temp").text(description);
  });
  
}
  
  