let searchParams =  new URLSearchParams(location.search);
let paramsId =  searchParams.get("id");
let urlId = `http://localhost:3000/api/products/${paramsId}`;
let product = "";

//connect API and fetch post
function getPostId(){
  fetch(urlId)
  .then(function(res){
    if (res) {
      return res.json();
    }
  })
  .then(async function(value) {
    product = await value;
    if(product){
      getPost(product);
      
      function getPost(product){
        let item = document.querySelector('.item');
        let article = document.createElement('article');
        item.appendChild(article);
        article.innerHTML =  `
          <div class="item__img">
          <img src="${product.imageUrl}" alt="${product.altTxt}">
          </div>
          <div class="item__content">
  
            <div class="item__content__titlePrice">
              <h1 id="title">${product.name}</h1>
              <p>Prix : <span id="price">${product.price}</span>€</p>
            </div>
  
            <div class="item__content__description">
              <p class="item__content__description__title">Description :</p>
              <p id="description">${product.description}</p>
            </div>
  
            <div class="item__content__settings">
              <div class="item__content__settings__color">
                <label for="color-select">Choisir une couleur :</label>
                <select name="color-select" id="colors">
                    <option value="">--SVP, choisissez une couleur --</option>
                    ${product.colors.map(color =>`<option value="${color}">${color}</option>`)}
                </select>
              </div>
  
              <div class="item__content__settings__quantity">
                <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
              </div>
            </div>
  
            <div class="item__content__addButton">
              <button id="addToCart">Ajouter au panier</button>
            </div>
  
            </div>`;
            
            let numberProducts = document.querySelector('#quantity');
            numberProducts.value = parseInt(numberProducts.value) +1;
                                        
           numberProducts.addEventListener('change', number());
                                          
            
            function number(e){

              console.log(e);
            };
           
           
            
      }

     
        
      
     
    }
  })
    .catch(function(err) {
      //displayed error
      let item = document.querySelector('.item');
      let article = document.createElement('article');
      item.appendChild(article);
      article.innerHTML = `<div class="item__content__titlePrice">
      <p id="description">La fiche produit n'est pas disponible pour le moment, veuillez réessayer ultérieurement ou contactez-nous <a href="mailto:support@name.com">par mail</a></p>
      </div>`;
      let emailTo = document.querySelector('#description a');
      console.log(emailTo);
      emailTo.style.color = "white";
      emailTo.style.textDecoration = "none";
      emailTo.style.fontWeight = "bold";  
    })
  };
  getPostId()