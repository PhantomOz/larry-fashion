// const prdcrt = [];
const maincontainer = document.getElementsByTagName('tbody')[0]
const addBtns = document.querySelectorAll('.add-btn')
const quantity_field = document.querySelectorAll('.num')
let itemCount = document.querySelector("span#item-count");

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
                    <td class="item-price"><h3 id="price">$${itemPrice}</h3></td>
                    <td><input type="number" min="1" value="1" onchange="updateTotal(this)" class="num" id=""></td>
                    <td class="total-price" id="total">$${itemPrice}</td>
                    <td><button class="remove-btn" type="button" id="remove" onclick="removeItem(this)">Remove</button></td>
                
                        `;
    maincontainer.append(itemsContainer);
    const addItem = parseInt(itemCount.textContent) + 1;
    itemCount.textContent = addItem;
}
  function updateTotal(ele) {
    const {value, parentElement} = ele;
    const price = parentElement.parentElement.querySelector("#price").textContent;
    const total = value * price.substr(1, price.length);
    parentElement.parentElement.querySelector("#total").textContent = `$${total}`;
  }

  function removeItem(ele) {
    const {parentElement} = ele;
    parentElement.parentElement.remove();
    const subItem = parseInt(itemCount.textContent) - 1;
    itemCount.textContent = subItem;
  }
        

