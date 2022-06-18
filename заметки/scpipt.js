
let btn = document.querySelector('#btn');
let btnClean = document.querySelector('#btn2');

let divText = document.querySelector('.text');


btn.addEventListener('click',()=>{

    const data = document.querySelector('#data').value;
    let text = document.querySelector('#text').value;
    console.log(data);
    
    if(text =='' || data ==''){
        alert('Поле ввода не заполнено'); // условие 
        return
    }
    

    localStorage.setItem(data,text) // записали в localStorage
   

    let arr = []; // сделали массив
    const keys = Object.keys(localStorage);   // тк localStorage это объект - мы используем Object.keys()
    for(let key of keys){ //цикл
        let str = localStorage.getItem(key); // получаем значение по ключу кеу c каждой этерацией
        arr.push(`<p>${key} :<br> ${str}</p>`) //в масив получаем ключ и значение
  
     
    }

    arr.forEach(i=>{ // перебираем наш масив 
    let divText = document.querySelector('div');
     let p = document.createElement('p') // создаем новый элемент
     p.style.border='3px solid green';
     p.style.width ='300px'
     p.style.height ='200px'
     p.innerHTML = i;

     divText.append(p)
     
    })

})











