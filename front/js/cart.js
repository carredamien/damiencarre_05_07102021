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
    let quantity = document.querySelectorAll('.itemQuantity');

function getCart(){
  if(cartOfKanap){
    for (kanap of cartOfKanap){
      
      let kanaptotal = parseInt(kanap.quantity) * parseFloat(kanap.price);

      let cartArticle = document.createElement('article');
      cartArticle.classList.add('cart__item');
      cartItems.appendChild(cartArticle);
      cartArticle.setAttribute('data-id', kanap.id);
      cartArticle.innerHTML =  
      `<div class="cart__item__img">
        <img src="${kanap.image}" alt="${kanap.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__titlePrice">
          <h2>${kanap.name}</h2>
          <p>${kanaptotal} €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté :</p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>`;
          
      let kanapQuantity = document.querySelector('.itemQuantity');
   
      kanapQuantity.addEventListener('change', (e)=>{
        quantity = e.target.value;
        console.log(quantity);
        let price = document.querySelector('.cart__item__content__titlePrice p');
        price.innerHTML =  `${quantity * parseFloat(kanap.price)} €`;
        
      })
      // // if(kanap.quantity){
      //   let quantityValue = kanap.quantity;
      //   console.log(quantityValue);
      //         quantityValue.addEventListener('change', (e)=>{
      //               e.target.value
      //         })      
                    // quantityValue.addEventListener('change', (e)=>{
                      //   console.log(e);
                      // console.log(e.target.value);
                      // console.log(e);
                      // e.target.value;
                      // console.log(e.target.value);
                    // })
                    // }    
                  };//fin de boucle
                } else{
                  let cartArticle = document.createElement('article');
                  cartArticle.classList.add('cart__item');
                  cartItems.appendChild(cartArticle);
                  cartArticle.innerHTML = `Vous n'avez toujours pas trouvé le kanap de vos rêves ?`
            };
          };
          getCart();
          
          // if(!kanap){
          //   let deleteItem = document.querySelector('.deleteItem');
          //   deleteItem.addEventListener('click', ()=>{
              
          //       deleteItem = localStorage.removeItem('kanap');
          //       location.reload();
          //     });
          //     }
          
                  
                  
                  

                  
                  let form = document.querySelector(".cart__order__form");
                  let firstName = document.getElementById("firstName");
                  let lastName = document.getElementById("lastName");
                  let address = document.getElementById("address");
                  let city = document.getElementById("city");
                  let email = document.getElementById("email");
                  let btnOrder = document.getElementById("order");
                  let formContact = [];
                  
                  firstName.addEventListener('blur', (e)=>{
                    const errorFName = document.getElementById('firstNameErrorMsg');
                    
                    firstName = e.target.value; 
                    firstName? errorFName.textContent = '' : errorFName.textContent = 'Veuillez entrer votre prénom';
                    firstName = firstName.toLowerCase();
                    
                  })
lastName.addEventListener('blur', (e)=>{
  const errorLName = document.getElementById('lastNameErrorMsg');
  lastName = e.target.value;
  lastName? errorLName.textContent = '' : errorLName.textContent = 'Veuillez entrer votre nom';
  lastName = lastName.toLowerCase();
  
  
})
address.addEventListener('blur', (e)=>{
  const errorAddress = document.getElementById('addressErrorMsg');
  address = e.target.value;
  address? errorAddress.textContent = '' : errorAddress.textContent = 'Veuillez entrer votre adresse';
  address = address.toLowerCase();
})
const errorCity = document.getElementById('cityErrorMsg');
city.addEventListener('blur', (e)=>{
  city = e.target.value;
  city? errorCity.textContent = '' : errorCity.textContent = 'Veuillez entrer votre ville';
  city = city.toLowerCase();
})
// var emailReg = new RegExp(/^([w-.]+)@((?:[w]+.)+)([a-zA-Z]{2,4})/i);
// // var valid = emailReg.test(email);
const errorEmail = document.getElementById('emailErrorMsg');
email.addEventListener('blur', (e)=>{
  email = e.target.value;
  email? errorEmail.textContent = '' : errorEmail.textContent = 'Veuillez entrer votre email';
  validerEmail();
  re.test(String(email).toLowerCase());
  console.log(re);
  // email = email.toLowerCase();
  
  // if(valid){
    //   errorEmail.textContent = "";
    // }else{
      //   errorEmail.textContent = "adresse email invalid";
      // }
      
      
      
    })
    
    function validerEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }