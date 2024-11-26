const progress = document.getElementById('progress');
const xhr = new XMLHttpRequest ();

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    xhr.open ('POST','https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData (document.forms[0]);
    xhr.send(formData);
    });

xhr.upload.onprogress = function updateProgress(event) { 
    if (event.lengthComputable) {
    progress.value = (event.loaded / event.total);
    console.log('Отправлено ',event.loaded,' из ',event.total);
    }
};

xhr.onload = function() {
    debugger;
    response = JSON.parse(xhr.responseText);
    alert (response.message);
};