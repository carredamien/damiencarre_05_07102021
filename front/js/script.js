//APPROCHE MODULES
let app = {
  //connect to api and variables init
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
      //displayed posts
      app.displayPost(app.products);
    })
    .catch(function(err) {
      //displayed error
      app.displayError();
      
    })
  },
  
  // function displayed posts
  displayPost: function(){
    if (app.products){
      for(product of app.products){
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
        a.href = `?id=${product._id}`;
        articleImg.setAttribute('alt', product.altTxt);
        articleTitle.innerHTML = product.name;
        articleP.innerHTML = product.description;
      }
      
      const searchParams = new URLSearchParams(location.search);
      searchParams.get("id");
      if(searchParams.has('id')){
        location.pathname = `/front/html/product.html`;
      }
      else{
        window.location.href;
      }
    }
  } ,

  //function displayed error
  displayError: function(){
    let titleH2 = document.querySelector('.limitedWidthBlock .titles h2');
    titleH2.innerHTML = "Nous sommes désolés, une erreur est survenue" ;
    
  }

};
//loading
document.addEventListener('DOMContentLoaded', app.init);

            
            
            
        