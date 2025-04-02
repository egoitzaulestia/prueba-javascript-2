// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

// V-0.1 _ Primera versión
function findDuplicates(text) {
    // Convertir el texto a minúsculas para hacer la comparación más fácil
    let lowerText = text.toLowerCase();
    
    // Convertir el texto en un array de letras
    let letters = lowerText.split('');
    
    // Crear un array para guardar las letras que se repiten
    let duplicates = [];
    
    // Recorrer cada letra
    for (let i = 0; i < letters.length; i++) {
        let currentLetter = letters[i];
        
        // Contar cuántas veces aparece la letra actual
        let count = 0;
        for (let j = 0; j < letters.length; j++) {
            if (letters[j] === currentLetter) {
                count++;
            }
        }
        
        //Si la letra aparece más de una vez y no la hemos guardado antes
        if (count > 1 && !duplicates.includes(currentLetter)) {
            // Incluir letras, números y símbolos comunes
            if (currentLetter.match(/[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/)) {
                duplicates.push(currentLetter);
                // Adaptar el mensaje según el tipo de carácter 
                let tipo = currentLetter.match(/[a-zA-Z]/) ? "letra" : // utilizamos operadores terciarios
                          currentLetter.match(/[0-9]/) ? "número" : "símbolo";
                console.log(`El ${tipo} '${currentLetter}' aparece ${count} veces`);
            }
        }
    }
    
    // Mostrar todas las letras que se repiten
    console.log('Caracteres que se repiten:', duplicates.join(', '));
}

// Probemos la nueva función con un texto que incluya números y símbolos
let testText = "Hello World 2024!!! Testing 123...";
console.log('\nResultado:');
findDuplicates(testText);


// V-0.2 _ Segunda versión
function findDuplicatesV02(text) {
    // Objeto para almacenar la cuenta de cada letra
    let letterCount = {};

    // Convertir el texto a minúsculas para hacer la comparación más fácil
    let textConverted = text.toLowerCase();

    // Contar ocurrencias de cada letra
    for (let char of textConverted) {
        // Solo contar letras, omitir espacios y caracteres especiales
        if (/[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    // Imprimir resultados
    for (let letter in letterCount) {
        if (letterCount[letter] > 1) {
            console.log(`El carácter '${letter}' aparece ${letterCount[letter]} veces`);
        }
    }
}

let text = "Hello World!!!";

findDuplicatesV02(text);



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////



// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

// V-0.1 _ Primera versión
function printOddNumbers(num) {
    const finalNumber = num + 50;

    for (let i = 0; i < finalNumber; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOddNumbers(5)


// V-0.2 _ Segunda versión
function printOddNumbersV02() {
    const inputNumber = Number(prompt("Introduce a number: ")) + 50;

    for (let i = 0; i < inputNumber; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOddNumbersV02();