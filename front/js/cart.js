//Récupération du localstorage
let kanapStorage = JSON.parse(localStorage.getItem("kanap")); //récupération du localstorage
console.log(kanapStorage);
let price ="document.querySelector('.cart__item__content__titlePrice p')";
 //gestion du tarif selon les quantité

//  function UpdateQuantity(e, id){
//      console.log(e.target.value);
//      console.log(id);
//   // let itemQuantitys = document.querySelectorAll('.itemQuantity');
//   // for(let itemQuantity of itemQuantitys){
//   // }

// }
function getCart(){  //fonction qui affiche le panier
  for(kanap of kanapStorage){ 
    const cartItems = document.getElementById('cart__items');
    const cartArticle = document.createElement('article');
    cartArticle.classList.add('cart__item');
    // let kanapTotal = parseInt(kanap.quantity) * parseFloat(price);
    
    cartItems.appendChild(cartArticle);
    cartArticle.setAttribute('data-id', kanap.id);
    cartArticle.innerHTML =  `
    <div class="cart__item__img">
      <img src="${kanap.image}" alt="${kanap.altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__titlePrice">
        <h2>${kanap.name}</h2>
        <p>${kanap.price} €</p>
      </div>
    <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}" onChange="updateQuantity(event, '${kanap.id}')">
    </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem" onClick= "deleteProduct('${kanap.id}')">Supprimer</p>
      </div>
    </div>`
    
  }
  
  
  
  
  // function UpdateQuantity(e){
    //   for(let itemQuantity of itemQuantitys){
      //     console.log(e.target.value);
      //   }
      
      // }
      // UpdateQuantity();
      // function handleUpdateQuantity(){
        
        //     let kanapQuantitys = document.querySelector('.itemQuantity');
        //     let price = document.querySelector('.cart__item__content__titlePrice p');
        //     for (i=0; i<kanapQuantitys.length; i++){
          //       kanapQuantitys[i].addEventListenerAll('change', (e)=>{
            //         quantity = e.target.value;
            //         kanapPrice = (parseInt(quantity) * parseFloat(kanap.price));
            
            // console.log(quantity, kanap.price, kanapPrice);
            //         price.innerHTML =  `${kanapPrice} €`;
            //       })
  
            //     }
            // }
          }
          getCart();
          
          // gestion du tarif selon les quantité
          function updateQuantity(e,id){
       
          
            let quantity = e.target.value;
            // let itemQuantity = document.querySelector('.itemQuantity');
            // let kanapTotal = parseInt(quantity) * kPrice;
         
            if (quantity != kanap.quantity){
              console.log(kanap.id);
              const kanapQuantity = kanapStorage.filter(
                      (x) => x.id === kanap.id);
                console.log(kanapQuantity);

            }



            // if (colors.value && quantity.value != 0 && quantity.value < 100) { //s'il y a une couleur et une quantité

            //   let getStorage = JSON.parse(localStorage.getItem('kanap'));
      
            //   if (getStorage != null) {
      
            //     const hasColor = getStorage.filter(
            //       (x) => x.id === kanap.id && x.color === colors.value);
      
            //     if (hasColor && hasColor.length) {
            //       hasColor[0].quantity = parseInt(hasColor[0].quantity)
            //       hasColor[0].quantity += parseInt(quantity.value);
            //     } else {
      
            //       getStorage.push(kanap);
      
            //     }
            //     localStorage.setItem("kanap", JSON.stringify(getStorage));
      
            //   } else {
      
      
            //     kanapStorage.push(kanap);
            //     localStorage.setItem("kanap", JSON.stringify(kanapStorage));
            //   }
      
            // }else{
            //   alert('Veuillez choisir une couleur et une quantité');
            // }










            // let price = document.querySelector('.cart__item__content__titlePrice p');
            // price.innerHTML =  `${quantity * parseFloat(kanap.price)} €`;
          
          
          }
          
          // let kanapQuantity = document.querySelectorAll('.itemQuantity');
          //   for (quantity of kanapQuantity){
            //     // console.log(quantity.value);
            //     quantity.addEventListener('change', ()=>{
              //     let price = document.querySelector('.cart__item__content__titlePrice p');
              //     let kanapPrice = (parseInt(quantity) * parseFloat(kanap.price) );
              //     price.innerHTML =  `${quantity * kanapPrice } €`;
//     });
//   };
//   ;
// let price = document.querySelectorAll('.cart__item__content__titlePrice p');
// price.innerHTML =  `${kanap.quantity * parseFloat(kanap.price)} €`;
// console.log(price);