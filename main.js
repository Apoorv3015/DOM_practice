
// const headtitle = document.getElementById('main-header');
// const title = document.querySelector('.title');
// headtitle.style.borderBottom = "3px solid black";
// title.style.color = "green";
// title.style.fontWeight = "bold";

const li = document.querySelectorAll('.list-group-item');
console.log(li[2]);
li[2].style.backgroundColor = "green";

li.forEach((item)=>{
    item.style.fontWeight = "bold";
});