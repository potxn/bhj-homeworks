const  xhr = new XMLHttpRequest();
xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.onreadystatechange = function () {
    let questions = JSON.parse(xhr.responseText).data.title; 
    let answers = JSON.parse(xhr.responseText).data.answers;
    let poolTitle = document.querySelector('.poll__title');
    let pollAnswers = document.querySelector('.poll__answers');
    if(xhr.readyState === xhr.DONE) {
        poolTitle.innerHTML = questions;
        for (i = 0; i < answers.length; i++) {
            pollAnswers.insertAdjacentHTML('beforeEnd', `
                <button class="poll__answer">
                ${answers[i]}
                </button> 
                `);
            };
        const vote= document.querySelectorAll('.poll__answer');
        vote.forEach((item) => {
            item.addEventListener ('click', function (e) {
            e.preventDefault();
            alert ('Спасибо, Ваш голос засчитан!');
            })
        });    
    };
};