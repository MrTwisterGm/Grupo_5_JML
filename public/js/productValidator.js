const form = document.querySelector('#agregar2');

console.log("js")

form.addEventListener('submit', function(event){
    console.log("evento")
    
    
    const productField = this.querySelector('#nombre');
    const descriptionField = this.querySelector('#descripcion');

    const fileInput = this.querySelector('#imagen');
    const filePath = fileInput.value;
    const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    
    if(productField.value == ''){
        alert('Debes completar el campo Nombre del Producto');
        event.preventDefault();
        }else if(productField.value.length <5){
        alert('El nombre del producto debe tener mas de 5 caracteres');
        event.preventDefault();
        }
       if(descriptionField.value == ''){
           alert('Debes completar la descipcion');
           event.preventDefault();
        }else if(descriptionField.value.length <19){
            alert('La descripcion debe tener mas de 20 caracteres');
            event.preventDefault();
        } 
        if(!allowedExtensions.exec(filePath)){
        alert('Adjunta una imagen con las siguientes extensiones .jpeg/.jpg/.png/.gif');
        event.preventDefault();
        fileInput.value = '';
        return false;
        
        }
});