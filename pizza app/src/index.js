
let div = document.querySelector("#porudzbina")
let arrayTable = [
    {naziv: 1}, {naziv: 2},{naziv: 3}, {naziv: 4}]
let arrayPica = [{
 naziv: 'Margherita',
 cena: 300,   
 value:false
},
{
    naziv: 'Siciliana',
    cena: 400,
    value:false,
    kolicina:0
},
{
    naziv: 'Letnja',
    cena: 500,
    value:false,
    kolicina:0
},
{
    naziv: 'Zimska',
    cena: 400,
    value:false,
    kolicina:0
}
];
let arrayPasta = [{
    naziv: 'Italiana',
    cena: 300,
    value:true,
    kolicina:''  
   },
   {
       naziv:'Spagnola',
       cena: 400,
       value:true,
       kolicina:''
   },
   {
       naziv: 'Bologna',
       cena: 500,
       value:true,
       kolicina:''
   },
   {
       naziv: 'Venezia',
       cena: 400,
       value:true,
       kolicina:''
   },
   {
    naziv: 'Venezia',
    cena: 400,
    value:true,
    kolicina:''
}
   
   ]
   let arrayDrink = [
       {naziv: 'coca-cola',
        cena: 150,
        value:true,
        kolicina:''},
        {naziv: 'juice',
        cena: 150,
        value:true,
        kolicina:''},
        {naziv: 'coffe',
        cena: 150,
        value:true,
        kolicina:'' },
   ]
   let arrayPrilog = [
       {naziv: 'ketchup',
       cena: 30,
       value:true,
       kolicina:''},
       {naziv: 'mayonese',
       cena: 40,
       value:true,
       kolicina:'' },
       {naziv: 'chili sauce',
       cena: 50,
      value:true,
      kolicina:''},
       {naziv: 'onion sauce',
       cena: 60,
        value:true,
        kolicina:''}
       
   ]
   
   
    let select = document.createElement('select')
    let option = document.createElement("option")
    option.textContent="Choose your table";
    select.append(option);
    arrayTable.forEach(el=>
     { let option = document.createElement('option')
       option.innerHTML = el.naziv;
       select.append(option)})
     
      
 let numberOfTable = document.querySelector("#numberOfTable")
 let niz3=[];
 numberOfTable.appendChild(select);

 let listOfContent = (array) => {
   
   
     let ul=document.createElement("ul")
     array.forEach(el =>
     {let li = document.createElement("li")
     let p = document.createElement("p")
     p.textContent=`${el.naziv} price: ${el.cena}`
     let checkbox= document.createElement("input")
    checkbox.type="checkbox";
    checkbox.id="check"
    checkbox.value="unchecked";
    checkbox.addEventListener("click", () => {
        if(checkbox.value=="checked")
        {  el.value = true;
           
            checkbox.value="unchecked";
             
        }
        else {
          
          el.value = false;
          checkbox.value="checked";
     } })
     let inputBroj = document.createElement("input");
     inputBroj.id="inputBroj"
    inputBroj.type = "number";
    inputBroj.placeholder="How much?";
   inputBroj.addEventListener("input", ()=> 
       {
        
    el.kolicina=inputBroj.value;
       console.log(el.kolicina, inputBroj.value)}

   )
    li.append(p, inputBroj, checkbox);
    ul.append(li)})
    return ul
 }

 let pizza = document.querySelector("#Pizza");
 pizza.append(listOfContent(arrayPica));
 let pasta = document.querySelector("#Pasta");
 pasta.append(listOfContent(arrayPasta));
 let prilog = document.querySelector("#Prilog");
 prilog.appendChild(listOfContent(arrayPrilog));
 let drinks = document.querySelector("#Drinks");
 drinks.appendChild(listOfContent(arrayDrink));
 arrayPica.filter(el=>{el.value=true})
 console.log(arrayPica)
 let button = document.querySelector("#Confirm");
 let arrayPorudzbina = [];
 let  porudzbina2 = document.querySelector("#porudzbina");
 let p4=document.createElement("p")
 p4.className="allert"
 button.addEventListener("click", () => 
 {p4.remove();
 if (niz3.length+1>0)
    arrayPorudzbina=niz3;
    console.log(arrayPorudzbina)
    arrayPorudzbina.push.apply(niz3);
    console.log("ejjjj")
    console.log(niz3)
    console.log(arrayPorudzbina)
 let porucenaPica = arrayPica.filter(el=>{return el.value==false})
 let porucenaPasta = arrayPasta.filter(el=>{return el.value==false})
 let poruceniPrilog = arrayPrilog.filter(el=>{return el.value==false})
 let porucenoPice = arrayDrink.filter(el=>{return el.value==false})
 
if(select.value=="Choose your table")
{   
    p4.textContent="Please choose your table :)";
    numberOfTable.append(p4);
return}
let porudzbina = {
     sto: select.value,
     pizza: porucenaPica,
     pasta: porucenaPasta,
     prilog:poruceniPrilog,
     pice: porucenoPice,
     placeno: false

 }
    

 arrayPorudzbina.push(porudzbina);
 let niz2 = arrayPorudzbina.filter(el =>{return el.sto==porudzbina.sto})
 console.log(niz2)
    niz2.filter(el=> {return el.placeno!=false})
    console.log(niz2)
    if(niz2.length>1)
    {alert("If you want make a order you need to pay previous one :)");
    return}
    
    let p1 = document.createElement("p");
    p1.textContent = `Order for table ${porudzbina.sto}`
    let cenaPice = pojedinacnaCena(porucenaPica);
    let cenaPaste = pojedinacnaCena(porucenaPasta);
    let cenaPica= pojedinacnaCena(poruceniPrilog);
    let cenaPrilog = pojedinacnaCena(porucenoPice);
    let ukupnaCena = cenaPice + cenaPaste + cenaPica + cenaPrilog;
    let p3 = document.createElement ("p");
    p3.textContent = `Total price: ${ukupnaCena}`
    let button2 = document.createElement("button");
    button2.textContent="Pay"
    let div1=document.createElement("div")
    button2.addEventListener("click", ()=>{
        div1.remove();
        let niz2 = arrayPorudzbina.filter(el =>{return el.sto==porudzbina.sto})
            // niz2[0].placeno=true;
            // console.log(arrayPorudzbina);
            niz3=arrayPorudzbina.filter(el => {if(el.sto==niz2[0].sto) {return el.placeno=false}})
            console.log(niz3);
        return niz3
        
        
    } )
    
    console.log(arrayPorudzbina)
    div1=document.createElement("div")
    div1.className="div1";
    div1.append(p1, poruzbinaSpisak(porucenaPica), poruzbinaSpisak(porucenaPasta), poruzbinaSpisak(poruceniPrilog), poruzbinaSpisak(porucenoPice),p3, button2 )
   div.append(div1);  
    select.value="Choose your table";
    let inputBroj=document.querySelector("#inputBroj")
    checkbox = document.querySelector("#check")
    inputBroj.value="";
    checkbox.checked=false;
    p4.innerHTML="";

   
  
  
 console.log(porudzbina)})


let pojedinacnaCena = (array) => {
    let cenaPorucenePice=0;
    
    array.map(el =>{if(el.kolicina>0) return cenaPorucenePice = cenaPorucenePice + (el.cena*el.kolicina)})
    return  cenaPorucenePice
 }

let poruzbinaSpisak = (array)=> {
    let div2 = document.createElement('div')
    div2.className="order"
    array.forEach(el=> {let p = document.createElement("p")
    if(el.kolicina>0)
   {p.textContent=`${el.naziv} x ${el.kolicina}`}
    else {
   
        p.textContent=`${el.naziv} x 0`
    }
    div2.appendChild(p)
    
   console.log(array)
   
    
   
 
    })
    return div2;
 }
 