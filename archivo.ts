// RETO 1
// Obtener Segmento Aleatorio de un Array en TypeScript
// Desarrollar una función en TypeScript llamada getRandomSlice que recupere un segmento
// aleatorio de un arreglo dado con una longitud especificada. La función debe aceptar dos parámetros: un arreglo de
// cualquier tipo y un valor numérico que represente la longitud deseada del segmento aleatorio.
// Si la longitud solicitada excede la longitud del arreglo, la función deberá lanzar un error indicando que la longitud
// solicitada es mayor que la longitud del arreglo.
// La función getRandomSlice debe devolver un segmento aleatorio del arreglo de entrada con la
// longitud especificada. Para lograr esto, generará un índice de inicio aleatorio dentro del rango del arreglo. Luego, extraerá
// un segmento del arreglo comenzando desde el índice generado
// aleatoriamente y extendiéndose hasta el índice más la longitud especificada.

// interface getRandomSliceProps {
//     array: any[]
//     long: number
// }

// const getRandomSlice = ({ array, long }: getRandomSliceProps): any[] => {

//     if (long > array.length) {

//         throw new Error("Longitud proporcioanda supera la del array")
//     }

//     let aleatorio: number = Math.floor(Math.random() * (array.length - long))

//     let segmento: number[] = myArreglo.slice(aleatorio, aleatorio + long)

//     return segmento
// }

// let myArreglo: any[] = [7, 8, 9, 6, 5, 4, 2, 5, 7]

// console.log(getRandomSlice({ array: myArreglo, long: 4 }))



// RETO 2
// Obtener Rol por Nombre desde un Conjunto Predefinido en TypeScript
// Desarrollar una función en TypeScript llamada getRoleFromRoleName que reciba como parámetro el nombre
// de un rol como una cadena y devuelva el objeto de rol correspondiente desde un conjunto predefinido de roles.
// El conjunto de roles se define como sigue:


// interface Role {
//     id: number;
//     name: string;
// };
// const UserRoles: { [key: string]: Role }
//     = {
//     ADMIN: { id: 1, name: "admin" },
//     MANAGER: { id: 2, name: "manager" },
//     USER: { id: 3, name: "user" },
// };

// const getRoleFromRoleName = (item: string): Role | undefined => {
//     let flag: number = 0;
//     Object.entries(UserRoles).map(
//         ([clave, valor], i) => {
//             let resultado: any;
//             if (clave !== item) {
//                 flag++;
//                 }
//         }
//     )
//     if (flag >= 3) {
//         return undefined;
//     }
//     return UserRoles[item];
// }
// console.log(getRoleFromRoleName("ADMN"))




//RETO 3


// Validación de Contraseña:
// Escribe una función llamada validarContraseña que tome una cadena como argumento y verifique si
// cumple con los siguientes criterios para ser considerada una contraseña segura:
// - Debe tener al menos 8 caracteres.
// - Debe contener al menos una letra mayúscula.
// - Debe contener al menos una letra minúscula.
// - Debe contener al menos un número.
// - Debe contener al menos un carácter especial de la siguiente lista: @$!%*?&.
// La función debe devolver true si la contraseña cumple con todos los criterios y false en caso contrario.

//////////// MI SOLUCION //////////////

// const validarContraseña = (password: string): string => {
//     let largeOk: boolean = false;
//     let numberOk: boolean = false;
//     let especialOk: boolean = false;
//     let lowerOk: boolean = false;
//     let upperOk: boolean = false;
//     let res: string = "";

//     let arrayPasword: string[] = Array.from(password)

//     if (arrayPasword.length >= 8) {

//         largeOk = true;
//     }

//     for (let i = 0; i < arrayPasword.length; i++) {

//         if (((arrayPasword[i]) === "0") || ((arrayPasword[i]) === "1") || ((arrayPasword[i]) === "2")
//             || ((arrayPasword[i]) === "3") || ((arrayPasword[i]) === "4") || ((arrayPasword[i]) === "5")
//             || ((arrayPasword[i]) === "6") || ((arrayPasword[i]) === "7") || ((arrayPasword[i]) === "8")
//             || ((arrayPasword[i]) === "9")) {

//             numberOk = true;

//         } else if (((arrayPasword[i]) === "@") || ((arrayPasword[i]) === "$") || ((arrayPasword[i]) === "!")
//             || ((arrayPasword[i]) === "%") || ((arrayPasword[i]) === "*") || ((arrayPasword[i]) === "?")
//             || ((arrayPasword[i]) === "&")) {

//             especialOk = true;

//         } else if (arrayPasword[i] === ((arrayPasword[i]).toLowerCase())) {
//             lowerOk = true;

//         } else if (arrayPasword[i] === ((arrayPasword[i]).toUpperCase())) {
//             upperOk = true;
//         }
//     }

//     if ((largeOk === true) && (especialOk === true) && (numberOk === true) && (upperOk === true) && (lowerOk === true)) {
//         return res = "contraseña OK";
//     } else {
//         return res = "contraseña NOK";
//     }
// }

// console.log(validarContraseña("jSDdfgdfg$5"))




// RETO 4
// Operaciones con Matrices:
// Escribe una función llamada sumarMatrices que tome dos matrices como argumentos y 
// devuelva una nueva matriz que sea el resultado de la suma de las dos matrices de entrada. 
// Asegúrate de manejar correctamente los casos en los que las matrices no tengan las mismas 
// dimensiones para poder realizar la operación de suma. Las matrices se representan como 
// arrays bidimensionales de números.


// const sumarMatrices = (matriz1: any[], matriz2: any[]): number[] => {

//     let resultado: any[] = []
//     let caso: number = 0;

//     // const filas1 = matriz1.length;
//     // const columnas1 = matriz1[0].length;
//     // const filas2 = matriz2.length;
//     // const columnas2 = matriz2[0].length;

//     // // Determinar el número de filas y columnas de la matriz resultante
//     // const filasResultado = Math.max(filas1, filas2);
//     // const columnasResultado = Math.max(columnas1, columnas2);

//     // // Inicializar la matriz resultado con ceros
//     // const resultado: number[][] = Array.from({ length: filasResultado }, () =>
//     //     Array.from({ length: columnasResultado }, () => 0)
//     // );

//     let columnasM1: number = matriz1[0].length
//     let columnasM2: number = matriz2[0].length
//     let filasM1: number = matriz1.length
//     let filasM2: number = matriz1.length


//     if (matriz1.length > matriz2.length) {
//         resultado = matriz1
//         for (let i = 0; i < matriz2.length; i++) {

//             for (let j = 0; j < matriz2.length; j++) {
//                 if (i > filasM2-1) {
//                     resultado[i][j] = matriz1[i][j]
//                 } else if(j<filasM1) {
//                     resultado[i][j] = matriz1[i][j] + matriz2[i][j]
//                 }
//             }
//         }
//         console.log(resultado)
//     }

//     if (matriz1.length < matriz2.length) {
//         resultado = matriz2
//         for (let i = 0; i < matriz2.length; i++) {

//             for (let j = 0; j < matriz2.length; j++) {
//                 if (i > filasM1-1) {
//                     resultado[i][j] = matriz2[i][j]
//                 } else if(j<filasM1) {
//                     resultado[i][j] = matriz1[i][j] + matriz2[i][j]
//                 }
//             }
//         }
//         console.log(resultado)
//     }

//     if (matriz1.length === matriz2.length) {
//         resultado = matriz1

//         for (let i = 0; i < matriz1.length; i++) {


//             for (let j = 0; j < matriz1.length; j++) {

//                 resultado[i][j] = matriz1[i][j] + matriz2[i][j]

//             }
//         }
//     }

//     console.log(resultado)


//     return [];
// }


// sumarMatrices([[1, 5], [5, 8],[5, 8]], [[6, 2, 1],[5, 1, 2]])






// RETO 5
// Generación de Contraseñas Aleatorias:
// Escribe una función llamada generarContraseña que tome un parámetro longitud de tipo 
// number y devuelva una cadena aleatoria de esa longitud que cumpla con los siguientes 
// requisitos: 
// ● Debe contener una combinación de letras mayúsculas y minúsculas.
// ● Debe contener al menos un número.
// ● Debe contener al menos un carácter especial de la siguiente lista: !@#$%^&*.


// const generarContraseña = (largo: number): string => {
//     let password: string | number = ""
//     let letrasMay: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //26
//     let letrasMin: string = "abcdefghijklmnopqrstuvwxyz" //26
//     let carEsp: string = "!@#$%^&*" //0-7

//     let carEspPas: string = carEsp[(Math.floor(Math.random() * 7))]
//     let numbPas: number = Math.floor(Math.random() * 9)

//     let largoLetras: number = largo - 2;
//     let largoLetrasMay: number = Math.floor(largoLetras / 2)
//     let largoLetrasMin: number = largoLetras - largoLetrasMay

//     for (let i = 0; i < largoLetrasMay; i++) {
//         let letraMayPas: string = letrasMay[(Math.floor(Math.random() * 25))]
//         password += letraMayPas
//     }
//     for (let i = 0; i < largoLetrasMin; i++) {
//         let letraMinPas: string = letrasMin[(Math.floor(Math.random() * 25))]
//         password += letraMinPas
//     }
//     password += numbPas;
//     password += carEspPas;

//     return password;
// }

// console.log(generarContraseña(4)) //min 4




// RETO 6
// Validación de Direcciones de Correo Electrónico:
// Escribe una función llamada validarCorreoElectrónico que tome una cadena como argumento y 
// verifique si es una dirección de correo electrónico válida según el siguiente patrón:
// - Debe comenzar con una cadena que no contenga espacios ni símbolos especiales.
// - Debe contener un símbolo '@' seguido de una cadena que no contenga espacios ni símbolos 
// especiales.
// - Después del símbolo '@', debe contener un punto '.' seguido de una cadena que no contenga 
// espacios ni símbolos especiales.
// - La función debe devolver true si la cadena cumple con el patrón de una dirección de correo 
// electrónico válida y false en caso contrario.


// const validarCorreoElectrónico = (correo: any): string | undefined => {
//     let validacion: string = "";
//     let posicionArroba: number = 0;
//     let posicionPunto: number = 0;
//     let flag: number = 0;
//     let correoArray: string[] = Array.from(correo)
//     let tienePunto: boolean = false;

//     for (let i = 0; i < correoArray.length; i++) {
//         if (correoArray[i] === "@") {
//             posicionArroba = i;
//         }
//     }
//     let primeraParte: string[] = correoArray.slice(0, posicionArroba)
//     let segundaParte: string[] = correoArray.slice(posicionArroba + 1, correoArray.length)


//     for (let j = 0; j < primeraParte.length; j++) {
//         if (((primeraParte[j]) === " ") || ((primeraParte[j]) === "$") || ((primeraParte[j]) === "!")
//             || ((primeraParte[j]) === "%") || ((primeraParte[j]) === "*") || ((primeraParte[j]) === "?")
//             || ((primeraParte[j]) === "&")) {
//             return validacion = "NOK"
//         }

//     }
// flag++;
//     for (let j = 0; j < segundaParte.length; j++) {
//         if (((segundaParte[j]) === " ") || ((segundaParte[j]) === "$") || ((segundaParte[j]) === "!")
//             || ((segundaParte[j]) === "%") || ((segundaParte[j]) === "*") || ((segundaParte[j]) === "?")
//             || ((segundaParte[j]) === "&")) {

//                 return validacion = "NOK"
//         }
//     }
//     flag++;
//     for (let j = 0; j < segundaParte.length; j++) {
//         if ((segundaParte[j]) === ".") {
//             tienePunto = true;
//             posicionPunto = j
//         }
//     }

//     let segundaPrimeraParte: string[] = segundaParte.slice(0, posicionPunto)
//     let segundaSegundaParte: string[] = segundaParte.slice(posicionPunto + 1, correoArray.length)


//     if (tienePunto === true) {
//         for (let j = 0; j < segundaSegundaParte.length; j++) {
//             if (((segundaSegundaParte[j]) === " ") || ((segundaSegundaParte[j]) === "$") || ((segundaSegundaParte[j]) === "!")
//                 || ((segundaSegundaParte[j]) === "%") || ((segundaSegundaParte[j]) === "*") || ((segundaSegundaParte[j]) === "?")
//                 || ((segundaSegundaParte[j]) === "&")) {

//                     return validacion = "NOK"
//             }


//         }
//     }else if (tienePunto === false){
//         return validacion = "NOK"
//     }else {
//         flag++;
//     }
// if(flag>=2){
//     return validacion = "OK"
// }
// }

// let resultado = validarCorreoElectrónico("ferelbue@gmail.com")
// console.log(resultado)


// RETO 7
// Cifrado César:
// Escribe una función llamada cifradoCesar que tome dos parámetros: una cadena de texto y un 
// número que represente el desplazamiento del cifrado César. La función debe cifrar la cadena de texto 
// utilizando el cifrado César con el desplazamiento especificado y devolver la cadena cifrada. El cifrado 
// César consiste en desplazar cada letra en el alfabeto un número fijo de posiciones hacia la derecha. Si 
// la letra alcanza el final del alfabeto, continúa desde el principio. Los números y otros caracteres no 
// deben ser cifrados.


// const cifradoCesar = (texto: string, cesar: number): string[] => {
//     let textoCesarFinal: string[] = [];
//     let abecedario: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     let arrayTexto: string[] = Array.from(texto);
//     let flag:number = 0;
//     for (let i = 0; i < arrayTexto.length; i++) {

//         for (let j = 0; j < abecedario.length; j++) {
//             if (arrayTexto[i] === abecedario[j]) {
//                 textoCesarFinal.push(abecedario[j + cesar])
//                 flag++;
//             }
//         }
//         if(flag === 0){
//             textoCesarFinal.push(arrayTexto[i]);

//         }
//         flag=0;
//     }
//     return textoCesarFinal
// }

// console.log(cifradoCesar("el perro 4 de ! san roque?", 5))




// RETO 8
// Juego de cartas
// ● El objetivo es usar arrays en TypeScript para representar un mazo de cartas.
// ● Instrucciones:
// ● 1. Crea un nuevo archivo TypeScript.
// ● 2. Crea un array que represente un mazo de cartas.
// ● 3. El array debe tener 52 cartas, cada una con un palo y un valor.
// ● 4. Crea una función que baraja el mazo.
// ● 5. Crea una función que reparte una carta del mazo.
// ● 6. Prueba las funciones.

// let arrayCartas: string[] = ["1T", "2T", "3T", "4T", "5T", "6T", "7T", "8T", "9T", "10T", "JT", "QT", "KT",
//     "1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
//     "1P", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P", "10P", "JP", "QP", "KP",
//     "1R", "2R", "3R", "4R", "5R", "6R", "7R", "8R", "9R", "10R", "JR", "QR", "KR"]

// const barajar = (array: string[]): string[] => {
//     let arrayFinal: string[] = []
//     let arrayPrueba: string[] = array

//     for (let i = 0; i <= 51; i++) {
//         let numeroAleatorio: number = (Math.floor(Math.random() * array.length))

//         arrayFinal.push(arrayPrueba[numeroAleatorio])
//         arrayPrueba.splice(numeroAleatorio, 1)
//     }
//     return arrayFinal;
// }


// const reparte = (array2: string[]): string => {
//     let cartaFinal: string = "";
//     let numeroAleatorio: number = (Math.floor(Math.random() * 52))

//     cartaFinal = array2[numeroAleatorio]


//     return cartaFinal;
// }


// // console.log(barajar(arrayCartas))
// console.log(reparte(arrayCartas))



//RETO 9
// Desarrollar una función en TypeScript utilizando arrow function que reciba un arreglo como entrada
// y devuelva un valor aleatorio del arreglo. La función deberá calcular un índice aleatorio utilizando 
// la función Math.random() y el tamaño del arreglo proporcionado. Una vez calculado el índice 
// aleatorio, se utilizará para extraer un elemento aleatorio del arreglo.
// Tu tarea es crear una función que realice este proceso de manera eficiente y precisa, asegurando que
// el valor extraído sea uno de los elementos del arreglo.


// let arrayEquipos:string[] = ["Valencia","Celta","Getafe","Villareal","Osasuna"]

// const extrae = (array: string[]): string => {
//     let equipoFinal: string = "";
//     console.log()
//     let numeroAleatorio: number = (Math.floor(Math.random() * array.length))

//     equipoFinal = array[numeroAleatorio]

//     return equipoFinal;
// }

// console.log(extrae(arrayEquipos))



//RETO 10
// Extracción de Subarray Aleatorio en TypeScript
// Desarrollar una función getRandomSubarray en TypeScript que extraiga un subarreglo 
// completamente aleatorio de un arreglo dado. El subarreglo aleatorio debe tener una longitud 
// especificada y estar compuesto por elementos seleccionados al azar del arreglo original.
// Tu tarea es crear una función que implemente este proceso de manera eficiente y precisa, 
// asegurando que el subarreglo generado sea una muestra representativa y aleatoria del arreglo 
// original


let arrayEquipos:string[] = ["Valencia","Celta","Getafe","Villareal","Osasuna","Rayo","Girona","Betis","Almeria","Granada","Bibao","Real Sociedad","Alaves","Mallorca","Las palmas"]

const extrae = (array: string[],numero:number): string[] => {
    let equiposFinal: string[] = [];
    let arrayPrueba: string[] = array;
    let flag:number = 4;
    console.log()

    while(flag>0){

        let numeroAleatorio: number = (Math.floor(Math.random() * array.length))
    
        console.log(arrayPrueba.length)

        equiposFinal.push(arrayPrueba[numeroAleatorio])
        arrayPrueba.splice(numeroAleatorio, 1)

        flag--;
    }

    return equiposFinal;
}

console.log(extrae(arrayEquipos,4))



