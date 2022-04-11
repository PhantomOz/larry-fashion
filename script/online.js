// const prdcrt = [];
const maincontainer = document.getElementsByTagName('tbody')[0]
const addBtns = document.querySelectorAll('.add-btn')
const quantity_field = document.querySelectorAll('.num')

addBtns.forEach(addBtn => {
   addBtn.addEventListener('click',addCart)
})

function addCart(e) {
      
      const parentImg = e.target.parentElement
      // new image
      const newImg = parentImg.children[0].src;
    //   item name
      const itemName = parentImg.children[1].textContent;
    //   item price
      const itemPrice = parentImg.children[2].textContent;
    //   new header row
       const itemsContainer = document.createElement('tr');
     itemsContainer.innerHTML = `
                        
                    <td><input type="checkbox" class="checkbox" ></td>
                    <td class="img-box"><img src="${newImg}" width="40" alt=""></td>
                    <td><h3 class="item-name">${itemName}</h3></td>
                    <td class="item-price"><h3>${itemPrice}</h3></td>
                    <td><input type="number" value="1" class="num" id=""></td>
                    <td class="total-price">${itemPrice}</td>
                    <td><button class="remove-btn" type="button">$100</button></td>
                
                        `;
    maincontainer.append(itemsContainer);
    
  quantity_field.forEach(quantity => {
        quantity.addEventListener('change', upDateTotal )
    })
  
}
  function upDateTotal(e) {
     number_of_items = e.target
     number_of_items_parent = number_of_items.parentElement.parentElement;
     price_field = number_of_items_parent.getElementsByClassName('item-price')[0]
     total_field = number_of_items_parent.getElementsByClassName('total-price')[0]
     price_field_content = price_field.children[0].innerText
    console.log()
  }
        

