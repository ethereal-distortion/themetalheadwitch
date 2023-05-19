var a_parent = document.querySelectorAll(".a_parent");
var submenu_b = document.querySelectorAll(".submenu_b");

a_parent.forEach(function(a_parent_item) {
    a_parent_item.addEventListener("click", function(){
        submenu_b.forEach(function(submenu_b_item){
            submenu_b_item.classList.remove("active");
        })
        a_parent.forEach(function(a_parent_item){
            a_parent_item.classList.remove("active");
        })
        a_parent_item.classList.add("active");
    })
})

submenu_b.forEach(function(submenu_b_item) {
    submenu_b_item.addEventListener("click", function(){
        submenu_b.forEach(function(submenu_b_item){
            submenu_b_item.classList.remove("active");
        })
        submenu_b_item.classList.add("active");
    })
})