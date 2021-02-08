var city="abc";
function myFunction() {
    var city = document.getElementById("name").value;
  console.log(city);

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=6df81b18f188eb61c7761f191f5f010e",
  function(data){
  console.log(data);
  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var weather = data.main.temp
  var description= data.weather[0].description;
  $(".icon").attr("src", icon);
  $(".weather").text("The temperture is: "+weather);
  $(".temp").text(description);
  });
} 

myFunction();