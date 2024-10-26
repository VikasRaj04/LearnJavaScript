const form = document.querySelector('form');

// This usecase will give you empty values;
// const height = parseInt(document.querySelector('#height').value);   

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);    
    const weight = parseInt(document.querySelector('#weight').value);    
    const results = document.querySelector('#results');    

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Show the result
        results.innerHTML = `<span>Your BMI is ${bmi} </span>`;

        if(bmi < 18.6){
            results.innerHTML += `<p>Under Weight. Your ${bmi} BMI is Less than 18.6<p>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML += `<p>Normal Range. Your ${bmi} BMI is Between 18.6 and 24.9`;
        }else{
            results.innerHTML += `<p>Overwight. Your ${bmi} BMI is Greater than 24.9`;
        }
    }
    
})