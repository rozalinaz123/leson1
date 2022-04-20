//УРОК 1!

//1 Задание
const village = 'Bolshie Shady',
      country = 'Russia',
      number = 600,
      stadion = true

console.log(village)
console.log(country)
console.log(number)
console.log(stadion)


// 2 Задание
const a = 40
const b = 70
const S = a * b

console.log(S)

//3 Задание
const time = 2,
      speedOfFirst = 95,
      speedOfSecond = 114
const waySpeedOfFirst = speedOfFirst * time
const waySpeedOfSecond = speedOfSecond * time
const distance = waySpeedOfFirst + waySpeedOfSecond

console.log(waySpeedOfFirst)
console.log(waySpeedOfSecond)
console.log(distance)

//4 Задание
const randomNumber1 = Math.floor(Math.random() * 100)
if(randomNumber1 < 20 ){
    console.log('randomNumber1 меньше 20')
} else if(randomNumber1 > 50 ){
    console.log('randomNumber1 больше 50')
} else  {
    console.log('randomNumber1 больше 20 и меньше 50')
}

// 5 Задание
const randomNumber2 = Math.floor(Math.random() * 100)
switch(true){
    case (randomNumber2 < 20):
        console.log('randomNumber2 меньше 20');
        break;
    case (randomNumber2 > 50):
        console.log('randomNumber2 больше 50');
        break;
    default:
        console.log('randomNumber2 больше 20 и меньше 50')
}

