// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function duplicatedWord(text) {
    // Object to store the count of each letter
    let letterCount = {};

    // Convert text to lowercase for case-insensitive counting
    let textConverted = text.toLowerCase();

    // Count occurrences of each letter
    for (let char of textConverted) {
        // Only count letters, skip spaces and special characters
        if (/[a-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }

    // Print results
    for (let letter in letterCount) {
        if (letterCount[letter] > 1) {
            console.log(`Letter '${letter}' appears ${letterCount[letter]} times`);
        }
    }
}

let text = "Hello World!";

duplicatedWord(text);

// Ejercicio 1 (Versión principiante):
// Una versión más simple para contar letras duplicadas usando arrays
function findDuplicatesSimple(text) {
    // Paso 1: Convertir el texto a minúsculas para hacer la comparación más fácil
    let lowerText = text.toLowerCase();
    
    // Paso 2: Convertir el texto en un array de letras
    let letters = lowerText.split('');
    
    // Paso 3: Crear un array para guardar las letras que se repiten
    let duplicates = [];
    
    // Paso 4: Recorrer cada letra
    for (let i = 0; i < letters.length; i++) {
        let currentLetter = letters[i];
        
        // Paso 5: Contar cuántas veces aparece la letra actual
        let count = 0;
        for (let j = 0; j < letters.length; j++) {
            if (letters[j] === currentLetter) {
                count++;
            }
        }
        
        // Paso 6: Si la letra aparece más de una vez y no la hemos guardado antes
        if (count > 1 && !duplicates.includes(currentLetter)) {
            // Solo contar letras, no espacios ni caracteres especiales
            if (currentLetter.match(/[a-z]/)) {
                duplicates.push(currentLetter);
                console.log(`La letra '${currentLetter}' aparece ${count} veces`);

            }
        }
    }
    
    // Paso 7: Mostrar todas las letras que se repiten
    console.log('Letras que se repiten:', duplicates.join(', '));
}

// Probemos la nueva función
console.log('\nResultado de la versión principiante:');
findDuplicatesSimple("Hello World!");