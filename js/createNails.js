
const reassign = (last, aspect2) => { 
    let last1=last.find((item)=> item.aspect==aspect2)
    if(last1){
      if (last1.aspect=='Decoración') {
        return [last1.choice, last1.img]
      }else{
        return last1.choice 
      }
    }else{
      return 'No aplica'
    }
}
  //FUNCIONES PARA CREAR LOS MODELOS, PERTENECEN A LOS MÉTODOS DE CLASS NAILS

const styleNails=(priceNails, styleN)=>{
    let style2, style;
    style=paintSelect(styleN);
    addcontainMs('Acabado',"/img/form1.jpg",style,'Elija la forma o el acabado de uñas que prefiere. ')
    style.addEventListener('input', ()=> {
        style2=styleN.find((style1)=> style1.option==style.value);
        priceNails.splice(0,1,{aspect:'Acabado', choice:style.value, price: style2.priceN})//esto podría mehorar sin poner choice
    })
}
  
const sizeNails=(priceNails, numN)=>{
    let size;
    size=paintSelect(numN);
    addcontainMs('Tamaño',"/img/img.acrylic/sizeNailsE.jpg",size,'¿De qué tamaño desea que sean las uñas?');
    size.addEventListener('input', () => {
        priceNails.splice(1,1,{aspect:'Tamaño',choice:size.value, price:150+50*(size.value-1)})
        
    })
}
  
const decoration=(priceNails,decoratioN, base)=>{
    let adorn;
    let decor2;
    adorn=paintSelect(decoratioN);
    addcontainMs('Decoración',"/img/decor2.jpg",adorn,'¿Cuál es la decoración que más le gustaría?')  
    adorn.addEventListener('input', (e) => {
      decor2=decoratioN.filter((item)=>item.option==e.target.value)
      decoChoice(priceNails,decor2,base);
    })
}
  
const decoChoice=(priceNails,decoratioN,base)=>{
    let adorn, imgs, btn;
    if(base=='Acrílico'){
      imgs=decoratioN[0].imgAc
    }else imgs=decoratioN[0].imgNat
    
    cleanContaintMs();
    imgs.forEach(item=>{
      adorn=paintRadioBtn(decoratioN[0].option, item.id)
      addcontainMs(decoratioN[0].option,item.img,adorn,'')  
      adorn.addEventListener('input', (e) => {
        priceNails.push({aspect:'Decoración', choice:e.target.value, price: decoratioN[0].priceN, img:item.img});
        paintTable(priceNails,item.img);//here
        paintBtn('Guardar o repetir','btnSave');
      })
    })
}
  
  
const baseNails=(styleN,decoratioN,baseN,numN)=>{
    let baseCard;
    cleanContaintMs();
    baseN.forEach(element=>{
      baseCard=paintRadioBtn(element.base, element.id)
      addcontainMs(element.base,element.img,baseCard,'')  //podría añadir clean
  
      baseCard.addEventListener('input', (e) => {
        
        typeNails(styleN,decoratioN,numN, e.target.value)
      })
    })
}
  