let addToDo = document.getElementById("addToDo")
let listAll =[];
let checkedList=[];

console.log(checkedList.length)


let counter=0;
let uncheckedCountSpan = document.getElementById('checked-count')


function newTodo() {
  let p=document.querySelector("#alert")
  
  if(addToDo.value.trim()==="")
  {return p.textContent="Please, write your task."}
  p.innerHTML="";
  let classNames = {
 
    id: "",
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: '',
    TODO_TEXT: "",
    TODO_DELETE: 'todo-delete',
  }

  listAll.push(classNames);
  let numAll=document.getElementById("item-count");
  numAll.innerHTML= listAll.length;
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.createElement('li');
  itemCountSpan.className="addToDo1"
  let checkbox= document.createElement("input")
  checkbox.type="checkbox";
  checkbox.value="unchecked"
  classNames.TODO_CHECKBOX=checkbox.value;
  classNames.id = counter++;
  console.log(classNames.id)
  console.log(checkbox.value)
  checkbox.addEventListener("click", () => {
    if(checkbox.value=="checked")
    {console.log(checkedList);
      console.log(classNames.id)
      checkedList=checkedList.filter(ele=>{return ele.id !== classNames.id});
    checkbox.value="unchecked"
     uncheckedCountSpan.innerHTML=`${(checkedList.length / listAll.length)*100}%`;
     itemCountSpan.style.background="white"
    }
    else {
      itemCountSpan.style.background="rgb(5, 90, 31, 0.3)"
      checkedList.push(classNames);
      console.log(checkedList)
      checkbox.value="checked";
      uncheckedCountSpan.innerHTML= `${(checkedList.length / listAll.length)*100}%`;
    }
  })
  let btn=document.createElement("button");
  btn.textContent="X";
  btn.className="btnDel"
  btn.addEventListener("click", ()=> {
    itemCountSpan.remove();
    listAll= listAll.filter(ell=> {return ell.id!=classNames.id})
    checkedList=checkedList.filter(ele=>{return ele.id !== classNames.id});
    numAll.innerHTML=listAll.length
    
    if(listAll.length>0)
  
    {uncheckedCountSpan.innerHTML= `${(checkedList.length / listAll.length)*100}%`}
 else{uncheckedCountSpan.innerHTML=`0%`} }
    )

  classNames.TODO_TEXT=addToDo.value;
  let pp=document.createElement("p")
  pp.textContent=`- ${classNames.TODO_TEXT}`;
  pp.className="pp"
  itemCountSpan.appendChild(pp)
  console.log(classNames.TODO_TEXT)
  
  // let count1=document.querySelector("#checked-count1");
  //   if(((checkedList.length / listAll.length)*100)<=30)
  //   {count1.innerHTML=`Well done:`}
    uncheckedCountSpan.innerHTML= `${(checkedList.length / listAll.length)*100}%`
  let div1=document.createElement('div')
  div1.append(checkbox, btn)
  itemCountSpan.append(div1)
  list.appendChild(itemCountSpan);
  addToDo.value.restart()
   ;
   return list
}
