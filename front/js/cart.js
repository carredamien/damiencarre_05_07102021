let kanapStorage = JSON.parse(localStorage.getItem("kanap")); //récupération du localstorage
let price = "document.querySelector('.cart__item__content__titlePrice p')";
const cartAndFormContainer = document.getElementById('cartAndFormContainer');

if (cartAndFormContainer) {
  function getCart() { //fonction qui affiche le panier
    if (kanapStorage) {

      for (kanap of kanapStorage) {

        const cartItems = document.getElementById('cart__items');
        const cartArticle = document.createElement('article');
        cartArticle.classList.add('cart__item');
        cartItems.appendChild(cartArticle);
        cartArticle.setAttribute('data-id', kanap.id);
        cartArticle.innerHTML = `
        <div class="cart__item__img">
          <img src="${kanap.image}" alt="${kanap.altTxt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__titlePrice">
            <h2>${kanap.name}</h2>
            <p>${kanap.price * kanap.quantity} €</p>
          </div>
        <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}" onChange="handleUpdateKanapQuantity(event, '${kanap.id}', '${kanap.color}')">
        </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem" onClick= "deleteProduct('${kanap.id}', '${kanap.color}')">Supprimer</p>
          </div>
        </div>`
      }
    }
  }
  getCart();

  function handleUpdateKanapQuantity(e, productId, productColor) { // gestion du tarif selon les quantités
    for (kanap of kanapStorage) {
      if (kanap.id === productId && productColor == kanap.color) {
        kanap.quantity = e.target.value;
      }
    }
    localStorage.setItem("kanap", JSON.stringify(kanapStorage));
    location.reload();
  }
}

function getTotalCart() { //total du panier
  if (kanapStorage) {

    let kanapQuantity = kanapStorage.map(kanap => {
      return parseInt(kanap.quantity);
    })

    let numberProductsCaddy = kanapQuantity.reduce((acc, kanap) => {
      return acc + kanap
    }, 0);

    let totalKanapPrice = kanapStorage.map(kanap => {
      return parseFloat(kanap.price) * parseInt(kanap.quantity);
    })
    let totalPriceCaddy = totalKanapPrice.reduce((acc, kanap) => {
      return acc + kanap
    }, 0);
    let totalPrice = document.querySelector('.cart__price p');
    if (totalPrice) {
      totalPrice.innerHTML = `<p>Total (<span id="totalQuantity" value="">${numberProductsCaddy}</span> articles) : <span id="totalPrice">${totalPriceCaddy}</span> €</p>`;
    }
  } else {
    let totalPrice = document.querySelector('.cart__price p');
    if (totalPrice) {
      totalPrice.innerHTML = `<p>Total (<span id="totalQuantity" value="">0</span> article) : <span id="totalPrice">0</span> €</p>`;
    }
  }
}
getTotalCart();

let deleteItem = document.querySelector('.deleteItem'); //fontion pouur supprimer un produit
function deleteProduct(productId, productColor) {
  for (kanap of kanapStorage) {
    if (kanap.id === productId && productColor == kanap.color) { // je filtre par id et couleurs

      let indexOfKanap = (kanapStorage.indexOf(kanap)); // cela me renvoi un kanap, je récupére son index 
      kanapStorage.splice(indexOfKanap, 1);

      localStorage.setItem("kanap", JSON.stringify(kanapStorage));
      location.reload();
    }

  }

}

//formulaire 

let form = document.querySelector(".cart__order__form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
const errorFName = document.getElementById('firstNameErrorMsg');
const errorLName = document.getElementById('lastNameErrorMsg');
const errorAddress = document.getElementById('addressErrorMsg');
const errorCity = document.getElementById('cityErrorMsg');
const errorEmail = document.getElementById('emailErrorMsg');
let inputFirstName;

if (firstName) {
  firstName.addEventListener('blur', function () {
    validFirstName(this);

  });
  const validFirstName = function (inputFirstName) {
    let fNameRegex = new RegExp('^[a-zéèêàA-Z]+$', 'g');

    let testFName = fNameRegex.test(inputFirstName.value);
    if (testFName) {
      errorFName.textContent = '';
    } else {
      errorFName.textContent = 'Votre prénom n\'est pas valide';
    }
    orderFirstName = JSON.stringify(inputFirstName.value.toLowerCase());
    sessionStorage.setItem('Prénom', orderFirstName);
  };
}
if (lastName) {
  lastName.addEventListener('blur', function () {
    validLastName(this);
  });
  const validLastName = function (inputLastName) {
    let lNameRegex = new RegExp('^[a-zéèêàA-Z]+$', 'g');

    let testLName = lNameRegex.test(inputLastName.value);
    if (testLName) {
      errorLName.textContent = '';
    } else {
      errorLName.textContent = 'Votre nom n\'est pas valide';
    }

    orderLaststName = JSON.stringify(inputLastName.value.toLowerCase());
    sessionStorage.setItem('Nom', orderLaststName);
  };
}
if (address) {
  address.addEventListener('blur', function () {
    validAddress(this);
  });
  const validAddress = function (inputAddress) {
    let addressRegex = new RegExp('^[0-9a-zéèêàA-Z- ]+$', 'g');

    let testAddress = addressRegex.test(inputAddress.value);
    if (testAddress) {
      errorAddress.textContent = '';
    } else {
      errorAddress.textContent = 'Votre adresse n\'est pas valide';
    }
    orderAddress = JSON.stringify(inputAddress.value.toLowerCase());
    sessionStorage.setItem('Adresse', orderAddress);
  };
}

if (city) {
  city.addEventListener('blur', function () {
    validCity(this);
  });
  const validCity = function (inputCity) {
    let cityRegex = new RegExp('^[a-zéèêàA-Z- ]+$', 'g');

    let testCity = cityRegex.test(inputCity.value);
    if (testCity) {
      errorCity.textContent = '';
    } else {
      errorCity.textContent = 'Votre ville n\'est pas valide';
    }
    orderCity = JSON.stringify(inputCity.value.toLowerCase());
    sessionStorage.setItem('Ville', orderCity);
  };
}

if (email) {
  email.addEventListener('blur', function () {
    validEmail(this);
  });
  const validEmail = function (inputEmail) {
    let emailRegex = new RegExp('^[a-zA-Z09.-_]+[@]{1}[a-zA-Z09.-_]+[.]{1}[a-zA-Z]{2,10}$', 'g');

    let testEmail = emailRegex.test(inputEmail.value);
    if (testEmail) {
      errorEmail.textContent = '';
    } else {
      errorEmail.textContent = 'Votre email n\'est pas valide';
    }
    orderEmail = JSON.stringify(inputEmail.value.toLowerCase());
    sessionStorage.setItem('Email', orderEmail);
  };
}


//validation de commande

// async function handleFormSubmit(e){
if (kanapStorage) {

  function orderForm() {

    let formContact = {
      firstName: JSON.parse(sessionStorage.getItem('Prénom')),
      lastName: JSON.parse(sessionStorage.getItem('Nom')),
      address: JSON.parse(sessionStorage.getItem('Adresse')),
      city: JSON.parse(sessionStorage.getItem('Ville')),
      email: JSON.parse(sessionStorage.getItem('Email')),
    }
    if (formContact.firstName != undefined && formContact.lastName != undefined && formContact.address != undefined && formContact.city != undefined && formContact.email != undefined) {
      return formContact;
    }
  }
  orderForm();

  const product = [];

  function cartValidate() {
    for (kanap of kanapStorage) {
      let id = kanap.id;
      product.push(id);
    }
    return product;
  }
  products = cartValidate();
  let contact = orderForm();




  if (contact !== undefined && products !== undefined) { // si le formulaire contient des produits et que le formulaire n'est pas vide
    let btnOrder = document.getElementById("order");
    console.log(contact);
    if (btnOrder) {
      btnOrder.addEventListener('click', handleFormSubmit);
    }
  } else { // sinon je raffraichi la page
    Location.href
  }

  async function handleFormSubmit(e) {

    e.preventDefault();
    console.log(products);
    console.log(contact);
    await fetch("http://localhost:3000/api/products/order", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact,
          products
        })
      })
      .then(function (res) {
        if (res.ok) {

          return res.json();
        }
      })

      .then(function (value) {
        let orderId = value.orderId; //je récupère le numéro de commande 

        const searchParams = new URLSearchParams(location.search);
        console.log(searchParams);
        searchParams.get(`${order}`);
        location.replace(`/front/html/confirmation.html?order=${orderId}`);

      })
      .catch(function (err) { // s'il y a une erreur, je lance une fonction qui prévient l'utilisateur
        alert("Une erreur est survenue");



      })
  }
}