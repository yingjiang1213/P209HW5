//Start by creating data
let itemArray=[];
let TotalPrice=0;

//Define a constructor to create grocery objects
let GroceryObject = function (pName,pQuantity,pCategory,pPrice){
    this.ID = itemArray.length + 1;
    this.Name = pName;
    this.Quantity = pQuantity;
    this.Category = pCategory;
    this.Price = pPrice;
    this.TotalPrice = pPrice * pQuantity;
}

let selectedCateg = "not selected";


document.addEventListener("DOMContentLoaded", function () {
//Add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        itemArray.push(new GroceryObject(document.getElementById("title").value, document.getElementById("quantity").value,
            selectedCateg, document.getElementById("price").value));
        document.location.href = "index.html#ListAll";
        //Add the URL value
    });
    
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("price").value = "";
    });

    $(document).bind("change", "#select-categ", function (event, ui) {
        selectedCateg = $('#select-categ').val();
    });

    

    document.getElementById("buttonSortCateg").addEventListener("click",function(){
        itemArray.sort(function(a,b){
            if (a.Category < b.Category) {
                return -1;
              }
              if (a.Category > b.Category) {
                return 1;
              }
              return 0;
            });   
            createList();
            document.location.href = "index.html#ListAll";
        });
    

    document.getElementById("buttonSortTitle").addEventListener("click", function () {
        itemArray.sort(function (a, b) {
            if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
              return -1;
            }
            if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
        createList();

        document.location.href = "index.html#ListAll";
    });
    document.getElementById("buttonClearEverything").addEventListener("click", function(){
        itemArray=[];
        document.location.href = "index.html#Edit";
    });

    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
        createList();
    });
 
// end of page before show code *************************************************************************

//
// end of add button events ************************************************************************

function createList() {
    var theList = document.getElementById("ItemListul");
    theList.innerHTML = "";

    itemArray.forEach(function (element,) {  
        var li = document.createElement('li');
        var button= document.createElement('button');
        li.innerHTML =  element.ID + ":  " + element.Name + ", x" + element.Quantity + ", in " + element.Category + ", at $" + element.Price + " per item, for a total of $" + element.TotalPrice;
        button.innerHTML="delete";
        button.addEventListener("click", function(){
            li.remove();
            button.remove();
            document.getElementById("endPrice").innerHTML="";
        })
        theList.appendChild(li);
        theList.appendChild(button);
        
    });

function getGrandTotal(){
        let grandTotal = 0;
        let itemTotal;
        if(itemArray.length > 0)
    {
        for(let i = 0; i < itemArray.length; i++)
        {
            itemTotal = itemArray[i]['TotalPrice'];
            grandTotal = grandTotal + parseFloat(itemTotal);
        }
    }
        return grandTotal;
}

    let showPrice = document.getElementById("endPrice")
    showPrice.innerHTML = "The grand total for this shopping list is $" + getGrandTotal();
};

});      
