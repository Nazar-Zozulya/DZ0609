const moment = require('./node_modules/moment')

function getCurrentDay(day){
    console.log(moment().format( 'dddd' ))
}

function getCurrentMonth(){
    console.log(moment().format( 'MMMM' ))
}

function getCurrentYear (){
    console.log(moment().format( 'YYYY' ))
}

getCurrentDay()
getCurrentMonth()
getCurrentYear()