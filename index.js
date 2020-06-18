$(document).on("pageinit", function() {
    // constructor
    let foodlistArray = [];
    let foodlistObject = function (pItem, pName, pQuantity) {
        this.Item = pItem;
        this.Name = pName;
        this.Quantity = pQuantity; 
    }


// $.ajax({
//             type: "DELETE",
//             url: "/DeleteNote/" + ID ,
//             success: function(result){
//                 console.log(result);
//                 document.location.href = "index.html#showlist";  
//             },
//             error: function (xhr, textStatus, errorThrown) {  
//                 console.log('Error in Operation');  
//                 alert("Server could not delete Note with ID " + ID )
//             }  
//         });
    


let addFoodButton = document.getElementById("add-food");

    console.log("food button exists");
    addFoodButton.addEventListener("click", function() {
        console.log("CLICKED");
        let foodName = document.getElementById("food-name").value; 
        let foodQty = document.getElementById("food-quantity").value; 
        
        // foodObject does not exist - do you mean foodlistObject?
        foodlistArray.push(new foodlistObject(foodName, foodQty));

        // this is erroring out because of cross origin issues
        // if you're going to use ajax, you'll need to send it to a url
        // where does this url go?
        // $.ajax({
        //     url : "/AddFoodItem",
        //     type: "POST",
        //     data: JSON.stringify(foodlistArray),
        //     contentType: "application/json; charset=utf-8",
        //     dataType   : "json",
        //     success: function (result) {
        //         console.log(result);
        //         document.location.href = "index.html#showlist";  
        //     }
        // });
    })

    // commented this out because it caused the stuff to spin
//     document.getElementById("buttonClear").addEventListener("click", function () {
//         document.getElementById("name").value = "";
//         document.getElementById("quantity").value = "";
//     })

//     document.getElementById("buttonDelete").addEventListener("click", function () {
//         document.getElementById("name").value="";
//         document.getElementById("quantity").value="";
//    })
});
