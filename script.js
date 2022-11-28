/*let btnEnviar = document.querySelector(".btn-form-enviar");*/
let btnProductos = document.querySelector("#productos");
let subMenu = document.querySelector("#subMenu");
let btnProductosFooter = document.querySelector("#productosFooter");
let subMenuFooter = document.querySelector("#subMenuFooter");

btnProductos.addEventListener("click",()=>{
    subMenu.classList.toggle("mostrar")    
})

btnProductosFooter.addEventListener("click",()=>{
    subMenuFooter.classList.toggle("mostrar")    
})

/*btnEnviar.addEventListener("click",(event)=>{
    event.preventDefault()
});*/

