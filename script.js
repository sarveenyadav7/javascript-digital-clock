function getTime(){

    let presentTime = new Date()

    let presentHours = presentTime.getHours()
    let presentMinutes = presentTime.getMinutes()
    let presentSeconds = presentTime.getSeconds()

    if(presentHours <=12){
        document.querySelector('#present_houram-pm').innerText = 'Good Morning'
    }
    else if(presentHours <=16){
        document.querySelector('#present_houram-pm').innerText = 'Good Afternoon'
    }
    else if(presentHours <=20){
        document.querySelector('#present_houram-pm').innerText = 'Good Evening'
    }
    else{
        document.querySelector('#present_houram-pm').innerText = 'Good Night'
    } 



    // if(presentHours <12){
    //     hours = hours - 12
    //     document.querySelector('#present_houram-pm').innerText = 'A.M'
    // }
    // else{
    //     document.querySelector('#present_houram-pm').innerText = 'P.M'
    // }








    if(presentHours < 10){
        present_hours = '0' + hours
    } else if (presentMinutes < 10){
        present_minutes = '0' + minutes
    } else if (presentSeconds < 10){
        // present_seconds = '0' + seconds
    }


    document.querySelector('#present_hours').innerText = presentHours;
    document.querySelector('#present_minutes').innerText = presentMinutes;
    document.querySelector('#present_seconds').innerText = presentSeconds;


}
    setInterval(getTime, 1000)


















