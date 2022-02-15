// colortype.innerText = activecolor.getAttribute('data-colorname');

// let colors = document.querySelectorAll('dot');

// colors.forEach(el=>{
//     el.addEventListener('click', function(){
//         let color = this.getAttribute('data-color')

//         document.body.style.backgroundColor = color
//     })
// })

let color = this.getAttribute('data-color')

$('dot1').click(function(e){
    $(this).body.style.backgroundColor = color
})