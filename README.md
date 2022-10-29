# ZenCents

ZenCents is an HTML, CSS & JavaScript Application that focusses in on the use of Zen Quotes and Guided Meditation to relieve stress and anxiety.

![image](https://github.com/Vjohnson222/Front-End-Project/blob/main/start.png)

## APIs Used

ZenCents makes use of 3 separate API calls

1- (https://zenquotes.io/) Renders random Zen Quotes.

2- (https://www.youtube.com/iframe_api) Selects specific Youtube videos based on the video's ID (No API Key).

3- (https://zenquotes.io/) This API targets Youtube videos from a saved playlist (with an API key)

## Fetch API

```Javascript 
let area1 = document.getElementById("dataHere1");    

let url ="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/";

   function exchange1() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
       area1.innerHTML=`<a href="med1.html">Peace</a><br/><br/>"${data[0].q} "`;
       });
  }
```

## Application Structure

Start page > Home page

(Navbar)

Home_____ About_____ Mediations_____ Contact

## Application URL
https://vjohnson222.github.io/Front-End-Project/
