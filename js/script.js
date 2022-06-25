




$('.slider').slick({
    lazyLoad: false,
    slidesToShow: 10.6,
    slidesToScroll: 2,
    autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 680,
        settings: {
        slidesToShow: 3.6,
        slidesToScroll: 1,
        }}
    ],
    responsive: [
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 2.6,
        slidesToScroll: 1,
        }}
    ]
  });


  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}









  
          function useBtn(){
            const usageButtons = document.querySelectorAll('.chooseonebtn ')
            const usageCards = document.querySelectorAll('.description-item')
          
          
            function usage(category, items){
              items.forEach((item) => {
                const isItemUsage = !item.classList.contains(category)
                const isShow = category.toLowerCase() === 'all'
                if(isItemUsage && !isShow){
                  item.classList.add('hide')
                } else {
                  item.classList.remove('hide')
                }
              })
            }
            for (var i = 0; i < usageButtons.length; i++) {
              usageButtons[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("use");
                current[0].className = current[0].className.replace(" use", "");
                this.className += " use";
              });
            }
          
            usageButtons.forEach((button) => {
              button.addEventListener('click', () => {
                const curentCategory2 = button.dataset.filter
                usage(curentCategory2, usageCards)
              })
            })
          }
          
          
          useBtn()
          

          




 
  

          const modalButtons = document.querySelectorAll('[data-modal-button]');

          const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
  
          const allModals = document.querySelectorAll('[data-modal]');
  
  
  
  
  
          
          modalButtons.forEach(function (item) {
              item.addEventListener('click', function () {
              const modalId = this.dataset.modalButton;
              const modal = document.querySelector('#' + modalId);
              modal.classList.remove('hidden');
              document.body.style.overflow = 'hidden'
          
              modal.querySelector('.modal-window').addEventListener('click', function (e) {
                e.stopPropagation();
              });
            })
          })
          
          
          modalClosebuttons.forEach(function (item) {
              item.addEventListener('click', function () {
                  const modal = this.closest('[data-modal]');
                  modal.classList.add('hidden');
                  document.body.style.overflow = 'auto'
              })
  
  
            
  
  
              allModals.forEach(function (item) {
                item.addEventListener('click', function () {
                    this.classList.add('hidden');
                    document.body.style.overflow = 'auto'
              });
              
            });
  
          })






  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }





const show = document.querySelector(".show")

const hiddenColects = document.querySelector(".hide-item")

show.addEventListener('click', function(){
  hiddenColects.classList.toggle('hide-collections')


  if(hiddenColects.classList.contains('hide-collections')){
    show.textContent = 'Show All'
  }else {
    show.textContent = 'Hide'
  }
})













function insertAfter(elem, refElem){
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;
document.querySelector('#sort-popular').onclick = mySortPopular;

function mySort(){
  let goods = document.querySelector('.container');
  for(let i = 0; i < goods.children.length; i++){
      for(let j = i; j < goods.children.length; j++){
        if(+goods.children[i].getAttribute('data-price') > +goods.children[j].getAttribute('data-price')) {
            replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
            insertAfter(replacedNode, goods.children[i]);
        }
      }
    }
}


function mySortDesc(){
  let goods = document.querySelector('.container');
  for(let i = 0; i < goods.children.length; i++){
      for(let j = i; j < goods.children.length; j++){
        if(+goods.children[i].getAttribute('data-price') < +goods.children[j].getAttribute('data-price')) {
            replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
            insertAfter(replacedNode, goods.children[i]);
        }
      }
    }
}


function mySortPopular(){
  let goods = document.querySelector('.container');
  for(let i = 0; i < goods.children.length; i++){
      for(let j = i; j < goods.children.length; j++){
        if(+goods.children[i].getAttribute('data-popular') < +goods.children[j].getAttribute('data-popular')) {
            replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
            insertAfter(replacedNode, goods.children[i]);
        }
      }
    }
}

function insertAfter(elem, refElem){
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}




function app(){
  const filterButtons = document.querySelectorAll('.button')
  const cards = document.querySelectorAll('.container__card')


  function filter(category, items){
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category.toLowerCase() === 'all'
      if(isItemFiltered && !isShowAll){
        item.classList.add('hide')
      } else {
        item.classList.remove('hide')
      }
    })
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const curentCategory = button.dataset.filter
      filter(curentCategory, cards)
    })
  })
}


app()


const amountNfts = document.querySelector('.amount')



const cartContainer = document.querySelector('.cartdown-content')

window.addEventListener('click', function(event){
    
  if(event.target.hasAttribute('data-favorit')){


  const card = event.target.closest('.container__card')



  const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'), 
      title: card.querySelector('.item-title').innerText,
      price: card.querySelector('.product-price').innerText,
      counter: card.querySelector('[data-counter]').innerText
    }



    const itemInCart = cartContainer.querySelector(`[data-id="${productInfo.id}"]`)



    if(itemInCart){
    }
    else {


    const cartItemHTML =               `<div class="cart-item" data-id=${productInfo.id}>
    <div class="product-img">
        <img src=${productInfo.imgSrc} alt="">
        <div class="item-title">${productInfo.title}</div>
            <div class="price">
                <div class="product-price">${productInfo.price}</div>
            </div>
            <button data-delete class="delete">➖</button>
            </div>    
</div>               
</div>
</div>`   


    cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);



    amountNfts.innerText++
    
    }



    toggleCartStatus();
    calcCartPrice()
  }
})




window.addEventListener('click', function(event){
  if(event.target.hasAttribute('data-delete')){
   event.target.closest('.cart-item').remove()

  //  let idEv = event.target.getAttribute('[data-id]')
   
  //  let idBtn = addCartBtn.closest('.container__card')
   
  //  let iddBtn = idBtn.getAttribute['[data-id]']


  //  if(idEv === iddBtn){
  //   addCartBtn.classList.remove('tap')
  //  }


  amountNfts.innerText--
   
   toggleCartStatus();

   calcCartPrice()
   
  }
})




function toggleCartStatus(){



const cartEmpty = document.querySelector('[data-cart-empty]')
  
const orderForm = document.querySelector('#order-form')


  if(cartContainer.children.length > 2){
    cartEmpty.classList.add('none');
    orderForm.classList.remove('none');
  }else {
    cartEmpty.classList.remove('none');
    orderForm.classList.add('none');
  }
}





function calcCartPrice(){

  const cartItems = document.querySelectorAll('.cart-item');

  const totalPriceEl = document.querySelector('.total-price');

  let totalPrice = 0;

  cartItems.forEach(function (item) {
    


    const priceEl = item.querySelector('.product-price');

    const currentPrice = parseFloat(priceEl.innerText);

    totalPrice += Math.ceil(currentPrice);
    



  });


  totalPriceEl.innerText = totalPrice;

}
 






var isOn = false;

const addCartBtn = document.querySelectorAll('.favorit')

addCartBtn.forEach((item) => {
  item.addEventListener('click', function(){
  
  item.classList.add('tap')
  if(!isOn){
  cartContainer.classList.add('usage');
  setTimeout(function(){
    cartContainer.classList.remove('usage');
}, 2000);
  isOn = true;  
  }
  else{

  }

})
})








