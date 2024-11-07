const value = document.querySelector('.dropdown__value');
value.addEventListener('click', function (e){
    e.preventDefault();
    if (document.querySelector('.dropdown__list').classList.contains('dropdown__list_active'))  {
    close(value);
    }
    else {
    open(e);
  }
}
    );
let listMenu = document.querySelectorAll('.dropdown__item');
listMenu.forEach((item) => {
    item.addEventListener ('click', function (e) {
    e.preventDefault();
    close (item);
  })
});

function open (e){
    e.preventDefault();
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
}
function close (item){
  value.textContent = item.textContent;
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
}