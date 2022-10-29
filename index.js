// ------------script 1---------------------------------------
let area1 = document.getElementById("dataHere1");    

let url ="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/";

 
  function exchange1() {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        area1.innerHTML = `<a href="med1.html">Peace</a><br/><br/><br/><br/>"${data[0].q} "`;

     
      });
  }
// ------------script 2---------------------------------------
let area2 = document.getElementById("dataHere2");    

let url2 ="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/";

 
  function exchange2() {
    fetch(url2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        area2.innerHTML = `<a href="med2.html">Joy</a><br/><br/><br/><br/>"${data[0].q} "`;
     
      });
  }
// ------------script 3---------------------------------------
let area3 = document.getElementById("dataHere3");    

let url3 ="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/";

 
  function exchange3() {
    fetch(url3)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        area3.innerHTML = `<a href="med3.html">Blessings</a><br/><br/><br/><br/>"${data[0].q} "`;
     
      });
  }
// ------------script 4---------------------------------------
let area4 = document.getElementById("dataHere4");    

let url4 ="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/";

 
  function exchange4() {
    fetch(url4)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        area4.innerHTML = `<a href="med4.html">Laughter</a><br/><br/><br/><br/>"${data[0].q} "`;

           });
  }
// ------------script 5---------------------------------------
let area5 = document.getElementById("dataHere5");    

let url5 ="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/";

 
  function exchange5() {
    fetch(url5)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        area5.innerHTML = `<a href="med5.html">Wisdom</a><br/><br/><br/><br/>"${data[0].q} "`;

     
      });
  }
// ------------script 6---------------------------------------
let area6 = document.getElementById("dataHere6");    

let url6 ="https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/";

 
  function exchange6() {
    fetch(url6)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        area6.innerHTML = `<a href="med6.html">Love</a><br/><br/><br/><br/>"${data[0].q} "`;

     
      });
  }

// ------------script 7---------------------------------------

  let area7 = document.getElementById("dataHere7");    


 
  function exchange7() {

        console.log("Hello");
        area7.innerHTML = `<a href="med6.html">Gratitude</a><br/><br/><br/><br/>`;

     
    
  }

// ------------script 8---------------------------------------

   let area8 = document.getElementById("dataHere8");    
  
   
    
     function exchange8() {
      
           console.log("Hello");
           area8.innerHTML = `</a><br/><br/><br/><br/>`;
   
     }

// ------------script 9---------------------------------------

      let area9 = document.getElementById("dataHere9");    
 
   
    
     function exchange9() {
   
           console.log("Hello");
           area9.innerHTML = `<br/><br/><br/><br/>`;
          }
    // ------------script 10---------------------------------------

     let area10 = document.getElementById("dataHere10");    
    
     
      
       function exchange10() {
   
             console.log("Hello");
             area10.innerHTML = `<br/><br/><br/><br/>`;
     
          
             }

      // ------------script 11---------------------------------------


      let area11 = document.getElementById("dataHere11");    
      
      
       
        function exchange11() {
         
              console.log("Hello");
              area11.innerHTML = `<br/><br/><br/><br/>`;
      
           
        }


