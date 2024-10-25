const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);

        switch (e.target.id) {
            case '#FFFFFF':
                body.style.background = e.target.id;
                break;

            case '#121212':
                body.style.background = e.target.id;
                break;

            
            case '#1F618D':
                body.style.background = e.target.id;
                break;

            
            case '#6E2C00':
                body.style.background = e.target.id;
                break;

            
            case '#2C3E50':
                body.style.background = e.target.id;
                break;

            default:
                body.style.background = '#FFFFFF';
                break;
            
        }

        // You can also use if() statement to achieve this; Solution is below;
    });
});


// ========> Another Way <==========

// alternative option for switch case (if you don't want to use switch)



// if(e.target.id === '#FFFFFF'){
//     body.style.backgroundColor = e.target.id;
// }

// if(e.target.id === '#1F618D'){
//     body.style.backgroundColor = e.target.id;
// }

// if(e.target.id === '#121212'){
//     body.style.backgroundColor = e.target.id;
// }

// if(e.target.id === '#2C3E50'){
//     body.style.backgroundColor = e.target.id;
// }

// if(e.target.id === '#6E2C00'){
//     body.style.backgroundColor = e.target.id;
// }

