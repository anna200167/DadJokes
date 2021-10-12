let btn = document.querySelector('button');
let jokes = document.querySelector('h1');

btn.addEventListener('click',generateJoke);

    generateJoke();
    function generateJoke (){
    let config = {
        headers:{
            Accept:'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com',config)
    .then((res) => res.json())
    .then((data) => { 
        console.log(data);
        jokes.innerHTML = data.joke;
    }
    )
    
}
