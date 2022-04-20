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
const randomNumber = Math.floor(Math.random() * 100)
if(randomNumber < 20){
    console.log('randomNumber меньше 20')
}
else if(randomNumber > 50){
    console.log('randomNumber больше 50')
}
else if(randomNumber){
    console.log('randomNumber больше 20 и меньше 50')
}
