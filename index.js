//Start by creating data
let itemArray=[];

//Define a constructor to create grocery objects
let GroceryObject = function (pName,pQuantity,pCategory){
    this.ID = itemArray.length + 1;
    this.Name = pName;
    this.Quantity = pQuantity;
    this.Category = pCategory;
}

itemArray.push(new GroceryObject("Apple","2 lbs","Fruits"));
itemArray.push(new GroceryObject("Shampoo", "1 ct" ,"PersonalCare"));
itemArray.push(new GroceryObject("White Rice", "1 bag","Grain"));
itemArray.push(new GroceryObject("Cheesecake", "1 ct" , "Backery"));

let selectedCateg = "not selected";


document.addEventListener("DOMContentLoaded", function () {

//Add button events ************************************************************************
    
    document.getElementById("buttonAdd").addEventListener("click", function () {
        itemArray.push(new GroceryObject(document.getElementById("title").value, document.getElementById("quantity").value,
            selectedCateg));
        document.location.href = "index.html#ListAll";
        //Add the URL value
    });
    
    document.getElementById("buttonClear").addEventListener("click", function () {
        document.getElementById("title").value = "";
        document.getElementById("quantity").value = "";
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
            createList2();
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
        createList1();

        document.location.href = "index.html#ListAll";
    });

//
// end of add button events ************************************************************************


function createList() {
    var theList = document.getElementById("ItemListul");
    theList.innerHTML = "";

    itemArray.forEach(function (element,) {  
        var li = document.createElement('li');
        var button= document.createElement('button');
        li.innerHTML =  element.ID + ":  " + element.Name + "  " + element.Quantity + " " + element.Category;
        button.innerHTML="delete";
        button.addEventListener("click", function(){
            li.remove();
            button.remove();
        })
        theList.appendChild(li);
        theList.appendChild(button);
        
    });
};

function createList1() {
    
    var theList = document.getElementById("ItemListul");
    theList.innerHTML = "";

    itemArray.forEach(function (element,) {  
        var li = document.createElement('li');
        var button= document.createElement('button');
        li.innerHTML = element.Name + "  " + element.Quantity;
        button.innerHTML="delete";
        button.addEventListener("click", function(){
            li.remove();
            button.remove();
        })
        theList.appendChild(li);
        theList.appendChild(button);

    });
  
};

function createList2() {
    var theList = document.getElementById("ItemListul");
    theList.innerHTML = "";

    itemArray.forEach(function (element,) {  
        var li = document.createElement('li');
        var button= document.createElement('button');
        li.innerHTML =  element.Category + " " +element.Name + "  " + element.Quantity;
        button.innerHTML="delete";
        button.addEventListener("click", function(){
            li.remove();
            button.remove();
        })
        theList.appendChild(li);
        theList.appendChild(button);
       
    });
  
};



    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListAll", function (event) {   // have to use jQuery 
        createList();
    });

 
// end of page before show code *************************************************************************

});  
