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
   
      
      function addToCart() {

        const colors = document.querySelector('#colors');
        const quantityOfKanap = document.querySelector('#quantity');
        const btnAddToCart = document.querySelector("#addToCart");
        
        //ici, je récupère la valeur de la couleur
        colors.addEventListener('change', (e) =>{
          let color = e.target.value;
          return color;
        })
        
        //ici, je recupère la quantité
        quantityOfKanap.addEventListener('change', (e) =>{
          let quantity = e.target.value;
          return quantity;
        })
        
        
        btnAddToCart.addEventListener('click', (e) => {
          e.preventDefault();
          
          addToStorage();
        })
        
        function addToStorage(){
          let  kanapStorage = [];

          // si la couleur et les quantités sont remplies, j'ajoute
          if (kanap.color && kanap.quantity !== 0 && kanap.quantity < 100){
            
            // if( kanap.id !=""|| kanap.id !== undefined || kanap.id !== null){
              
            //   if (!kanapStorage.includes(kanap.id)){
            //     console.log('ok');
            //     kanap = JSON.stringify(kanap);
            //     localStorage.setItem('kanap', kanap);
            //     kanap = JSON.parse(kanap);
            //     kanapStorage.push(kanap);
            //     console.log(localStorage);
            //     console.log(kanapStorage);
                
            //   }else{
            //     console.log('no');
            //     localStorage.getItem('kanap');
            //     kanap = JSON.stringify(kanap);
            //     kanap = JSON.parse(kanap); 
            //   }
            
                
            // }
              
          }   
        }
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
    
   
          