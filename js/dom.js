

//MODIFICAR EL DOM
const paintCards=(aspect,img,tag)=> {
    const divCard= document.createElement('div')
    divCard.className=" m-3 card border-white align-items-center";
    divCard.style="width: 20rem"
    divCard.innerHTML=//font1
      `<h5 class="m-3 card-title">${aspect}</h5>
      <img class="card-img-top" src=${img} alt="Card image cap">`
    divCard.appendChild(tag)
    return divCard;
}
  
  
const creatBodyCards=(indication,tag)=> {
    const divBody=document.createElement('div');
    divBody.className='card-body';
    divBody.innerHTML=`<p class="font1">${indication}</p>`
    divBody.appendChild(tag)
    return divBody;
}
  
const paintSelect=(options)=> {
    const select=document.createElement('select')
    select.className="form-select";
    select.ariaLabel="Default select example";
    select.value='0';
    select.innerHTML=` <option selected>Abrir este menú de selección</option>`
    options.forEach(item => {
      const op=document.createElement('option')
      op.innerText=item.option
      select.appendChild(op);
    });
    return select;
}
  
  
const paintRadioBtn=(aspect,id)=> {
    let divRadioB=document.createElement('div')
    divRadioB.className="form-check";
    divRadioB.innerHTML=
      `
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id=${id} value=${aspect} >
          <label class="form-check-label font1" for=${id}>❤️</label>
      `
    return divRadioB;
}
  
const addcontainMs=(aspect,img,form,instruction)=> {
    const containMs= document.getElementById('containMs')
    let divBody=creatBodyCards(instruction,form,aspect)
    let divCard=paintCards(aspect,img,divBody)
    containMs.appendChild(divCard);
}

const cleanContaintMs=()=>{
    const containMs= document.getElementById('containMs')
    containMs.innerHTML='';
    return containMs;
}
  
const paintTable=(priceNails, img)=> {
    let table= document.createElement('table');
    let tbody= document.createElement('tbody');
    table.classList="table table-hover table-success  table-bordered w-50 ";
    table.innerHTML=`
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Aspecto</th>
          <th scope="col">Elección</th>
          <th scope="col">Precio de c/n</th>
        </tr>
      </thead>
    `
    priceNails.forEach(item => {
      tbody.innerHTML+=
        `<tr>
        <th  scope="row">${priceNails.indexOf(item)+1}</th>
        <td>${item.aspect}</td>
        <td>${item.choice}</td>
        <td>$ ${item.price}</td>
        </tr>`
    });
    tbody.innerHTML+=
      `<td colspan="4"><img src=${img} class="img-fluid" width="15%" />
      <small>Ejemplo.</small>
      </td>
      `
    table.appendChild(tbody)
    cleanContaintMs().appendChild(table);
}
  
const paintBtn=(action,targetClass)=> { 
    let btnPink=document.getElementById(targetClass)
    let divBtn=document.createElement('div')
    divBtn.innerHTML=`
      <button type="button" id=${action}  class="btn btn-lg font1 m-3">${action}</button>`
      btnPink.appendChild(divBtn)
    return btnPink
}
  
const finalModel=(model, img)=> {
    let containtMs=cleanContaintMs()
    let divResult=document.createElement('div');
    divResult.className="divResult"
    divResult.innerHTML=`
    <h4 class=" text-danger mb-3">Modelo</h3>
    `
    model.forEach(item => {
    divResult.innerHTML+=`
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-sm ">
          <h6 class="my-0">${Object.keys(item)}:</h6>
          <span class=" text-success" >${Object.values(item)}</span>
        </li>
      </ul>`
    });
    containtMs.appendChild(divResult)
    containtMs.innerHTML+=`
        <div class="w-30 m-5 d-flex align-items-end">
            <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between">
                <h6 class="my-0">${Object.keys(img)}</h6>
                <span> <img src=${img.Ejemplo}  width="50%" /> </span>
                </li>
            </ul>
        </div>
        ` 
    goBack();
}