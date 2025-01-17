
let number = +prompt('Введите число')
let i = 1
while ( i <= number) {
    if( i == 1){
        console.log(i + ' banana');

    }else{
        console.log( i + ' bananas');

    }
    i++
}



let number1 = +prompt("Сколько раз сработает цикл");
let summ = 0;

for (let i = 0; i < number1; i++) {
  if (i % 2 == 0) {
    summ += i;
  }
}
console.log('Сумма четных чисел ' + summ);


let firstnumber = +prompt('Введите число')
let degree = +prompt('Введите степень')
for( i = 0; i < 1; i++ ){
    console.log( firstnumber ** degree )
}



    // let number = prompt('Введите число:')
    // for(var i = 0; i < 1; i++){
    //     if(number == 1){
    //         alert(' 1 banana')
    //     }else{
    //         alert(number + ' bananas')
    //     }
    // }
    
    // let number1 = +prompt('Введите число')
    // for(i=0; i<=number1; i++){
    //     if(i % 2 && i<=number1){
    //         console.log('Четные числа до ' + number1 );
    //     }
    // }
