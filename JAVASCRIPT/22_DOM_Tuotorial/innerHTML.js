// Inner HTML IN Javascript

const headLine = document.querySelector(".headline");
console.log(headLine);

// Fetching Inner HTML
console.log(headLine.innerHTML);

// Making changes in inner HTML
headLine.innerHTML = "<h1>Inner html changed so manage </h1>";
headLine.innerHTML += "<button class =\" btn btn-headline\">Learn More<botton>";

console.log(headLine.innerHTML);

/*

#the inner html property setd or returns the html content (inner Html) of an element.
# what is innerHtml in javascript?
          innerHTML is an HTML element property that has two uses
          for webdevelopers: 1) tou can use it to get the internal HTML content of any html element
          as an html string. 2) you can also use it to set or change elements'
          inner html content.

*/