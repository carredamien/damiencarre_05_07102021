//connect API and promise
fetch(`http://localhost:3000/api/products`)
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

    // console.log(products);
    })
    .catch(function(err) {
      console.log("Une erreur est survenue");
      
    })




//     // let articlesImg = document.querySelectorAll('#items a article img');
//     // console.log(articlesImg);

//     // for(let product of products){
//     //  article = product 








