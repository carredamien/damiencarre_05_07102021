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
      window.location.pathname('index.html')
      
    })

  //   <article>
  //   <div class="item__img">
  //     <img src="../images/logo.png" alt="Photographie d'un canapé">
  //   </div>
  //   <div class="item__content">

  //     <div class="item__content__titlePrice">
  //       <h1 id="title">Nom du produit</h1>
  //       <p>Prix : <span id="price">42</span>€</p>
  //     </div>

  //     <div class="item__content__description">
  //       <p class="item__content__description__title">Description :</p>
  //       <p id="description">Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
  //     </div>

  //     <div class="item__content__settings">
  //       <div class="item__content__settings__color">
  //         <label for="color-select">Choisir une taille :</label>
  //         <select name="color-select" id="colors">
  //             <option value="">--SVP, choisissez une couleur --</option>
  //             <option value="vert">vert</option>
  //             <option value="blanc">blanc</option>
  //         </select>
  //       </div>

  //       <div class="item__content__settings__quantity">
  //         <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
  //         <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
  //       </div>
  //     </div>

  //     <div class="item__content__addButton">
  //       <button id="addToCart">Ajouter au panier</button>
  //     </div>

  //   </div>
  // </article>


//     // let articlesImg = document.querySelectorAll('#items a article img');
//     // console.log(articlesImg);

//     // for(let product of products){
//     //  article = product 








