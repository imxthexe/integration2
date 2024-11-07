var btn = document.querySelector(".question");
const text = document.querySelector("p");
var btn2 = document.querySelector('.question2');

btn.addEventListener('click' , () => {
    text.classList.toggle('p-is-visible');
});

btn.addEventListener('click' , () => {
    btn.classList.toggle('question2');
});


function changeImage(){
    let displayImage = document.getElementById('image1')
    if(displayImage.src.match('png/plus.png')){
        displayImage.src = 'png/moins.png'
    } else {
        displayImage.src = 'png/plus.png'
    }
}


