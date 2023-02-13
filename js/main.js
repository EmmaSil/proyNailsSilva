
//FUNCIONES QUE NO PERTENECEN A LOS MÉTODOS DE CLASS NAILS


const goBack=()=> {
  setTimeout(()=> {
    getDecoration();  
  }, 5000)
}

const typeNails=(styleN,decoratioN,numN,base)=>{
  let nails, priceNails =[];
  
  if (base=='Acrílico') {
    nails=new Nails(decoratioN,styleN,base,priceNails, numN);
    cleanContaintMs();
    nails.styles();
    nails.sizes();
    nails.decorations();
    objNails(nails, priceNails,decoratioN);

  }else{
    nails=new Nails(decoratioN,[],base,priceNails, numN);
    cleanContaintMs();
    nails.decorations();
    objNails(nails, priceNails,decoratioN);
  }
}

const objNails=(nails,priceNails)=> {
  let btnSave=document.getElementById('btnSave')
  btnSave.addEventListener('click', (e) => {
    if (e.target.id=='Guardar'){
      nails.finalDecision=priceNails; 

      Swal.fire({
        title: 'Guardar',
        text: '¿Quiere guardar el modelo de uñas elegido?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6', cancelButtonColor: '#d33',
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Volver a elegir'
    }).then((result) => {
        if (result.isConfirmed) {
            nameModelNails(JSON.stringify(nails),'Guardar');
        }else{
          getDecoration();
        }
        btnSave.innerHTML='';
    }) 
   }  
  })
}

const getModel=(modelName, action)=> { 
  let model, features;
  model=JSON.parse(localStorage.getItem(modelName));
  if(model!=null){
    if (action=='Buscar') {
      const {form1:Forma, size1:Tamaño, decor1:Decoración, base1: Base, img1:Ejemplo, price1:Precio} = model
      features=[{Forma}, {Tamaño}, {Decoración}, {Base}, {Precio}]
      finalModel(features, {Ejemplo} )
    }else{
      localStorage.removeItem(modelName);
      Swal.fire(
        'Borrado',
        'El modelo fue eliminado correctamente',
        'success' )
      getDecoration();
    }
  }else{
    Swal.fire(
      'Error',
      'No existe ese modelo.',
      'warning' )
      getDecoration();
   }     
}

const nameModelNails=(functionN, action)=> {
  Swal.fire({
    title: 'Nombre del modelo de uñas',
    html: `<input type="text" id="model" class="swal2-input" placeholder="modelName">
    `,
    confirmButtonText: action,
    focusConfirm: false,
    preConfirm: () => {
      const nameModel = Swal.getPopup().querySelector('#model').value
      if (!nameModel) {
        Swal.showValidationMessage('Ingresa el nombre del modelo de uñas.')
      }else if(functionN==''){
        if(action=='Eliminar'){
          getModel(nameModel,action)
        }else{
          getModel(nameModel,action)
        }
      }else{
        localStorage.setItem(nameModel ,functionN );
        Swal.fire(
          'Guardado',
          'El modelo se guardó correctamente!',
          'success'   
        )
        goBack();
      }
    }
  }).then((result) => {
    if (!result.isConfirmed) {
      getDecoration();
    }
  })
}

const models=(decoratioN)=> {
  cleanContaintMs()
  paintBtn('Crear Modelo','btnSave')
  paintBtn('Buscar','btnSave')
  let btnPink= paintBtn('Eliminar','btnSave')
  btnPink.addEventListener('click', (e) => {
    if (e.target.id=='Crear'){
      baseNails(styleN,decoratioN,baseN,numN);
      btnPink.innerHTML='';
    } else if(e.target.id=='Buscar'){
      nameModelNails('', 'Buscar');
      btnPink.innerHTML='';
    }else{
      nameModelNails('', 'Eliminar');
      btnPink.innerHTML='';
    }
  })
}