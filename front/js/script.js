//APPROCHE MODULES

var app = {
  url : `http://localhost:3000/api/products`,
  products : "",

  init: function(){
    app.getPosts();
  },
  //connect API and promise
  getPosts: function(){
    fetch(app.url)
    .then(function(res){
      if (res) {
        
        return res.json();
      }
    })
    .then(async function(value) {
      app.products = await value;
      app.displayPost(app.products);
    })
    .catch(function(err) {
      //displayed error
     app.displayError();
    })
  },

  // displayed posts
  displayPost: function(){
    if (app.products){
        for(let product of app.products){
          let items = document.querySelector('#items');
          let a = document.createElement('a');
          items.appendChild(a);
          let article = document.createElement('article');
          a.appendChild(article);
          let articleImg = document.createElement('img');
          articleImg.src= product.imageUrl;
          article.appendChild(articleImg);
          let articleTitle = document.createElement('h3');
          article.appendChild(articleTitle);
          let articleP = document.createElement('p');
          article.appendChild(articleP);
          a.href = product._id;
          articleImg.setAttribute('alt', product.altTxt);
          articleTitle.innerHTML = product.name;
          articleP.innerHTML = product.description;
        }
    }
  } ,
  // displayed error
  displayError: function(){
    let titleH2 = document.querySelector('.limitedWidthBlock .titles h2');
    titleH2.innerHTML = "Nous sommes désolés, une erreur est survenue" ;
  }
};
document.addEventListener('DOMContentLoaded', app.init);

// js version 1
// connect API and promise
// const url = `http://localhost:3000/api/products`;
// fetch(url)
// .then(function(res) {
//   if (res) {
//     return res.json();
//   }
// })
// .then(function(value) {
//   //return of promise
//   let products = value;
//   if (products){
//     for(let product of products){
//           // const productId = window.location.href;
//           // console.log(productId);
          
//           let items = document.querySelector('#items');
//           let a = document.createElement('a');
//           items.appendChild(a);
//           let article = document.createElement('article');
//           a.appendChild(article);
//           let articleImg = document.createElement('img');
//           articleImg.src= product.imageUrl;
//           article.appendChild(articleImg);
//           let articleTitle = document.createElement('h3');
//           article.appendChild(articleTitle);
//           let articleP = document.createElement('p');
//           article.appendChild(articleP);
//           // a.href += productId;
//           console.log(a);
//           articleImg.setAttribute('alt', product.altTxt);
//           articleTitle.innerHTML = product.name;
//           articleP.innerHTML = product.description;
//         }
//       }
// })
// .catch(function(err) {
//   //displayed error
//   let titleH2 = document.querySelector('.limitedWidthBlock .titles h2');
//   titleH2.innerHTML = "Nous sommes désolés, une erreur est survenue" ;
//   err = titleH2; 
// })











