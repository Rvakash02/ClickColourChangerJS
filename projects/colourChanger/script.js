const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
    button.addEventListener('click', (E)=>{
        if(E.target.id == 'grey'){
            body.style.backgroundColor = 'grey'
        }

        if(E.target.id == 'white'){
            body.style.backgroundColor = 'white'
        }

        if(E.target.id == 'blue'){
            body.style.backgroundColor = 'blue'
        }

        if(E.target.id == 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
    })
})


