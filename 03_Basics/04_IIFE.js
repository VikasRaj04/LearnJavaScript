// Immiditely Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log("DB Connecter");
})();                               // SemiColon (;) required after one IIFE


( (name) => {                           // parameter
    // UnNamed IFFE
    console.log(`DB Connected Two ${name}`)
} )('Vikas');                           // arguments