//connect API and promise
const url = `http://localhost:3000/api/products`;
fetch(url)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value) {
  //return of promise
  let products = value;
    if (products){
      // Créate html posts + display posts
      console.log(products);
        for(product of products){
          
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
          articleImg.setAttribute('alt', 'product.altTxt');
          articleTitle.innerHTML = product.name;
          articleP.innerHTML = product.description;
        }
      }
    })
    .catch(function(err) {
      //displayed error
      let titleH2 = document.querySelector('.limitedWidthBlock .titles h2');
      titleH2.innerHTML = "une erreur est survenue" ;
      err = titleH2; 
    })








