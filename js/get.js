const getDecoration=()=> {
    fetch('/data/obj.json')
    .then((resp) => resp.json())
    .then(img => {
       decoratioN=[
            {option:'Dibujo', priceN:120, imgAc:img[4],  imgNat:img[0]},
            {option:'Especial', priceN:100, imgAc:img[5], imgNat:img[1]},
            {option:'Lisa', priceN:60, imgAc:img[6], imgNat:img[2]},
            {option:'Transparente', priceN:80, imgAc:img[7],  imgNat:img[3]}
          ]
          models(decoratioN);
    })
   

}

getDecoration()
