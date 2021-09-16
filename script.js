/*async function sendApiRequest(){
  let response = await fetch(``);
  console.log(response)
} */
var url = "";

fetch('https://api.nasa.gov/planetary/apod?api_key=4UiLm1y5yj8clyghvfucWaCf3trSRbXomSrPC8w5')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector("#image").src=data.hdurl;
    document.querySelector("#title").innerHTML="Title: " + data.title;
    document.querySelector("#description").innerHTML="Description: " + data.explanation;
    document.querySelector("#date").innerHTML="Date of Capture: " + data.date;
  });

  
  



