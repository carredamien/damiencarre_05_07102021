//Récupération du localstorage
let kanaStorage = JSON.parse(localStorage.getItem("kanap")); //récupération du localstorage

let price ="document.querySelector('.cart__item__content__titlePrice p')";
 //gestion du tarif selon les quantité

 function UpdateQuantity(e){
     console.log(e.target.value);
  // let itemQuantitys = document.querySelectorAll('.itemQuantity');
  // for(let itemQuantity of itemQuantitys){
  // }

}
function getCart(){  //fonction qui affiche le panier
  for(kanap of kanaStorage){ 
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
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}" onChange="updateQuantity(e)">
    </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem" onClick= "deleteProduct(${kanap.id})">Supprimer</p>
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
          
          //gestion du tarif selon les quantité
          function updateQuantity(e){
        
            // let itemQuantitys = document.querySelectorAll('.itemQuantity');
            console.log(e);
          
          
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