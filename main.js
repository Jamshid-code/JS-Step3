let number = prompt('Введите число:')
for(var i = 0; i < 1; i++){
    if(number == 1){
        alert(' 1 banana')
    }else{
        alert(number + ' bananas')
    }
}

let number1 = +prompt('Введите число')
for(i=0; i<=number1; i++){
    if(i % 2 && i<=number1){
        console.log('Четные числа до ' + number1 );
    }
}

let firstnumber = +prompt('Введите число')
let degree = +prompt('Введите степень')
for( i = 0; i < 1; i++ ){
    alert( ' Ответ ' + firstnumber ** degree )
}