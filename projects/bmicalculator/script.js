const form = document.querySelector('form')

form.addEventListener('submit', (E) => {
    E.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span> ${bmi} </span>` ;
        if(bmi > 24.9){
            result.innerHTML = `<span> ( ${bmi} ) You're over weight</span>` ;  
        }
        else if(bmi >= 18.6 && bmi < 25){
            result.innerHTML = `<span> ( ${bmi} ) Congratulations You're fit</span>` ;  
        }
        else {
            result.innerHTML = `<span> ( ${bmi} ) You're under weight</span>` ;  
        }
    }

    

})

