
// execute 

window.onload = function digital_fn(){
    
    let toggle = document.querySelector("#nav .toggle-btn")
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click',function(event){
        collapse.classList.toggle('active')
    });


    // masonry library
    let grid = document.querySelector("#site-main .recent-work-area .images-flex");
    
    // creaating object 
    let msnry = new Masonry(grid,{
        itemSelector: '.flex-item',
        gutter: 100, //add space between all grid item
        fitWidth: true
    })
    
}


// relax js
var rellax = new Rellax('.rellax',{
    center :true
})




