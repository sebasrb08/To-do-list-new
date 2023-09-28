const formulario = document.getElementById("formulario")
const agregar = document.getElementById("agregar")
const tareas = document.getElementById("tareas")
formulario.onsubmit=(e)=>{
    e.preventDefault()
}

agregar.addEventListener("click",()=>{
    if (tareas.innerHTML === ""){
        console.log("hola")
    }
    let div2 = document.createElement("div")
    div2.classList.add("div3")
    
    let parrafo=document.createElement("p")
    parrafo.classList.add("parrafo")
    
    let check=document.createElement("input")
    check.classList.add("check")
    check.type="checkbox"

    let eliminar=document.createElement("button")
    eliminar.classList.add("bi-trash")

    
    let editar=document.createElement("button")
    editar.classList.add("bi-pencil")


    parrafo.textContent=tareas.value

    div2.appendChild(check)
    div2.appendChild(parrafo)
    div2.appendChild(eliminar)
    div2.appendChild(editar)
    formulario.appendChild(div2)
    

    tareas.value=""

    eliminar.addEventListener("click",(e)=>{
        eliminados(e,div2)
    })
    editar.addEventListener("click",()=>{
        edit(parrafo)
    })
})

function eliminados(e,div){
    div.remove()
}

function edit(parrafo){
    let opacidad = document.createElement("div")
    opacidad.classList.add("modales")

    let modal = document.createElement("div")
    modal.classList.add("modales2")

    let input = document.createElement("input")
    input.type="text"
    input.value=parrafo.textContent

    let agregar = document.createElement("button")
    agregar.classList.add("bi-plus")


    modal.appendChild(input)
    modal.appendChild(agregar)
    opacidad.appendChild(modal)
    document.body.appendChild(opacidad)
}

