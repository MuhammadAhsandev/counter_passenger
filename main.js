const countNumber = document.getElementById('count');
const incrementNumber = document.getElementById('increment');
const decrementNumber = document.getElementById('decrement');

incrementNumber.addEventListener('click', function(){
    let count = parseInt(countNumber.innerText);

    count += 1;
    countNumber.innerText = count;
});

decrementNumber.addEventListener('click', function(){
    let count = parseInt(countNumber.innerText);

    if(count > 0){
        count -= 1;
        countNumber.innerText = count;
    }
})

document.getElementById('alert-btn').addEventListener('click', function(){
    let count = parseInt(countNumber.innerText);
    alert(`Your number is ${count}`);
})