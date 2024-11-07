const tabs = [...document.querySelectorAll('.tab')];
const tabsContent = [...document.querySelectorAll('.tab__content')];
tabs.forEach((item, index) =>{
    item.addEventListener('click', () => {
    for (i=0; i<tabs.length; i++) {
        tabs[i].classList.remove('tab_active');
        tabsContent[i].classList.remove('tab__content_active')
    }
    item.classList.add('tab_active');
    tabsContent[index].classList.add('tab__content_active');
        });;
});