export const ConvertTime=(Hours,Minutes)=>{
    if(Hours>12 && Hours<=21){
        if(Minutes<10){
            return (`0${Hours-12}:0${Minutes} PM`)
        }else{
            return (`0${Hours-12}:${Minutes} PM`)
        }
    }
    else if(Hours>=22 && Hours<=24){
        if(Minutes<10){
            return (`${Hours-12}:0${Minutes} PM`)
        }else{
            return (`${Hours-12}:${Minutes} PM`)
        }
    }
    else if(Hours>=0 &&Hours<=9){
        if(Minutes<10){
            return (`0${Hours}:0${Minutes} AM`)
        }else{
            return (`0${Hours}:${Minutes} AM`)
        }
    }
    else if(Hours<12 &&Hours>=10){
        if(Minutes<10){
            return (`${Hours}:0${Minutes} AM`)
        }else{
            return (`${Hours}:${Minutes} AM`)
        }
    }
    else if(Hours===12){
        if(Minutes<10){
            return (`${Hours}:0${Minutes} PM`)
        }else{
            return (`${Hours}:${Minutes} PM`)
        }
    }
    else if(Hours===24 &&Hours>=10){
        if(Minutes<10){
            return (`${Hours-24}:0${Minutes} PM`)
        }else{
            return (`${Hours-24}:${Minutes} PM`)
        }
    }
    
}

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const months = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];

export const DayDate=(date)=>{
    return((`${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`))
}

