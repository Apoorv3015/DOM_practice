
// const headtitle = document.getElementById('main-header');
// const title = document.querySelector('.title');
// headtitle.style.borderBottom = "3px solid black";
// title.style.color = "green";
// title.style.fontWeight = "bold";

// const li = document.querySelectorAll('.list-group-item');
// console.log(li[2]);
// li[2].style.backgroundColor = "green";

// li.forEach((item)=>{
//     item.style.fontWeight = "bold";
// });

// const li = document.getElementsByTagName('li');
// console.log(li);
// li[1].style.backgroundColor = "green";
// li[2].style.display = "none";

// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight = "bold";
// }

// const liFirst = document.querySelector('li');
// const liLast = document.querySelector('li:last-child');
// const liSecond = document.querySelector('li:nth-child(2)');
// const liThird = document.querySelector('li:nth-child(3)');

// liSecond.style.backgroundColor = "green";
// liThird.style.display = "none";

const li = document.querySelectorAll('li');
li[1].style.color = "green";
const odd = document.querySelectorAll('li:nth-child(odd)');
// console.log(odd);
odd.forEach((item)=>{
    item.style.backgroundColor = "green";
});