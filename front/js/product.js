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
    }
  })
  .catch(function(err) {
     getError();
  })
};  
getPostId();

//displayed product
function getPost(product){
        
  let newProduct = {
    id : paramsId,
    name: product.name,
    price : product.price,
    colors : product.colors,
    image : product.imageUrl,
    description : product.description,
    altTxt : product.altTxt,
    quantity: ""
  };
  
  let item = document.querySelector('.item');
  let article = document.createElement('article');
  item.appendChild(article);
  article.innerHTML =  `
    <div class="item__img">
    <img src="${newProduct.image}" alt="${newProduct.altTxt}">
    </div>
    <div class="item__content">

      <div class="item__content__titlePrice">
        <h1 id="title">${newProduct.name}</h1>
        <p>Prix : <span id="price">${newProduct.price}</span>€</p>
      </div>

      <div class="item__content__description">
        <p class="item__content__description__title">Description :</p>
        <p id="description">${newProduct.description}</p>
      </div>

      <div class="item__content__settings">
        <div class="item__content__settings__color">
          <label for="color-select">Choisir une couleur :</label>
          <select name="color-select" id="colors">
              <option value="">--SVP, choisissez une couleur --</option>
              ${newProduct.colors.map(color =>`<option value="${color}">${color}</option>`)}
          </select>
        </div>

        <div class="item__content__settings__quantity">
          <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
          <input type="number" name="itemQuantity" min="1" max="100" value="${newProduct.quantity}" id="quantity">
        </div>
      </div>

      <div class="item__content__addButton">
        <button id="addToCart">Ajouter au panier</button>
      </div>

      </div>`;
   
      
      function addToCart() {
        const colors = document.querySelector('#colors');
        const option = document.querySelector('#colors option');
        console.log(option);
        colors.addEventListener('change', (e) =>{
          // console.log(e.target.value);
          if (e.target.value ){
              console.log(e.target.value);
          }
          if(option = ""){
            console.log('veuillez sectionner une couleur');

          }        
        })
        
        
        const btnAddToCart = document.querySelector("#addToCart");
        btnAddToCart.addEventListener('click', ()=>{
          let numberOfKanap = document.querySelector('#quantity').value;
          
          console.log(numberOfKanap);
          // e.preventDefault();
          // console.log(numberOfKanap.value);
         
          // let ProductLocalStorage = localStorage.getItem(numberOfKanap);
     
          
          
        })
          
          
      }; 
      addToCart();
};  

//displayed error
function getError(){
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
};
    
   
          