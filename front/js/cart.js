// let app = {
//   // fetch and convert localStorage
//   cartOfKanap: JSON.parse(localStorage.getItem("kanap")),
//   cartItems: document.getElementById('cart__items'),
//   cartArticle: document.querySelector('#cart__items article'),
//   deleteItem: document.querySelector(".deleteItem"),
  
//   init: function(){     
//     app.getCart();
//     app.deleteKanap();
    
    
//   },
//   getCart: function(){
    
//     const cartItems = document.getElementById('cart__items');
//     let cartArticle = document.querySelector('#cart__items article');
//     cartItems.appendChild(cartArticle);
//     cartArticle.innerHTML =  `
//     <div class="cart__item__img">
//     <img src="${app.cartOfKanap.image}" alt="${app.cartOfKanap.altTxt}">
//     </div>
//     <div class="cart__item__content">
//     <div class="cart__item__content__titlePrice">
//     <h2>${app.cartOfKanap.name}</h2>
//     <p>${app.cartOfKanap.price} €</p>
//     </div>
//     <div class="cart__item__content__settings">
//     <div class="cart__item__content__settings__quantity">
//     <p>Qté : </p>
//     <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${app.cartOfKanap.quantity}">
//     </div>
//     <div class="cart__item__content__settings__delete">
//     <p class="deleteItem">Supprimer</p>
//     </div>
//     </div>
//     </div>`;
//   },

//   deleteKanap: function(){
//     app.deleteItem.addEventListener('click', (e)=>{
// console.log(e);
//     });
    
//   },




  
 
        
        
        
        
        
        
// };
// //loading
// document.addEventListener('DOMContentLoaded', app.init);

let cartOfKanap = JSON.parse(localStorage.getItem("kanap"));
const cartItems = document.getElementById('cart__items');
let cartArticle = document.querySelector('#cart__items article');


function getCart(){

  cartItems.appendChild(cartArticle);
  cartArticle.innerHTML =  `
  <div class="cart__item__img">
    <img src="${cartOfKanap.image}" alt="Photographie d'un canapé">
  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__titlePrice">
      <h2>${cartOfKanap.name}</h2>
      <p>${cartOfKanap.price} €</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cartOfKanap.quantity}">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem">Supprimer</p>
      </div>
    </div>
  </div>`;
  
}
getCart();

document.addEventListener('click', (e)=>{
  document.getElementsByClassName('deleteItem');
  cartOfKanap.e = localStorage.clear();
})
// deleteItem.addEventListener('click', (e) =>{

// })

