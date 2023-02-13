//OBJETOS Y CLASE NAILS

const baseN=[
    {id:'Ac', base:'Acrílico', img:"/img/img.acrylic/acrylic.jpg"},
    {id:'Nat', base:'Natural', img:"/img/img.nature/nature.jpg"},
  ]
  const styleN=[ 
    {option:'Square', priceN:30},
    {option:'Oval', priceN:30},
    {option:'Squoval', priceN:20},
    {option:'Almond', priceN:40},
    {option:'Ballerina' , priceN:20},
    {option:'Stiletto', priceN:70},
  ];//opciones para la forma

  const numN=[
    {option:1}, {option:2}, {option:3},
    {option:4}, {option:5}, {option:6},
    {option:7},
    ]//opciones para el largo de la uña

  
class Nails {
    constructor(decoratioN, styleN,baseN,priceNails, numN) {//falta choseN
        this.form1  = styleN;
        this.size1 = numN;
        this.decor1 = decoratioN;
        this.price1 = priceNails;
        this.base1 = baseN;
        this.img1;
    }
    bases(){baseNails(this.form,this.decor1,this.base1,this.size1)}
    styles(){styleNails(this.price1, this.form1)};   
    sizes(){sizeNails(this.price1, this.size1)};
    decorations(){return decoration(this.price1,this.decor1, this.base1)};
  
    set finalDecision(last){
        this.form1=reassign(last,'Acabado');
        this.size1=reassign(last,'Tamaño');
        this.decor1=reassign(last,'Decoración')[0];
        this.price1=`$ ${last.reduce((acc,value)=>acc+value.price,0)}`;
        this.img1=reassign(last,'Decoración')[1];
    };
    get finalDecision(){};
}