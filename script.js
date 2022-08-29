var date1, date2;
var city, city2;
var diffMin;
var sign1,sign2,hour1,hour2,min1,min2;
var hour_diff;
var min_diff;
function myfunction() {
    delay(1000).then(() => console.log(""));
    city = document.querySelector('#city').value;
    var api = 'http://worldtimeapi.org/api/timezone/';
    var overall = api + city;
    console.log(overall);
    fetch(overall).then((res) => res.json()).then((data) => {
        date1 = data['datetime'];
        // document.getElementById("daterdam1").innerHTML = date1;
        console.log(date1);
 
    });
    delay(1000).then(() => console.log(""));
    city2 = document.querySelector('#city2').value;
    var api = 'http://worldtimeapi.org/api/timezone/';
    var overall = api + city2;
    console.log(overall);
    fetch(overall).then((res) => res.json()).then((data2) => {
        date2 = data2['datetime'];
        // document.getElementById("daterdam2").innerHTML = date2;
        console.log(date2);
    });

    delay(2000).then(() => fetcher(date1,date2));



}


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


function fetcher(date1,date2){


    console.log("date1 : " + date1);
    console.log("date1 : " + date2);

    sign1 = date1.slice(26,27);
    sign2 = date2.slice(26,27);
    hour1 = parseInt(date1.slice(27,29));
    hour2 = parseInt(date2.slice(27,29));
    min1 = parseInt(date1.slice(-2));
    min2 = parseInt(date2.slice(-2));
    // console.log("date1 : " + sign1);
    // console.log("date1 : " + sign2);
    // console.log("date1 : " + hour1);
    // console.log("date1 : " + hour2);
    // console.log("date1 : " + min1);
    // console.log("date1 : " + min2);
    // console.log("date1 : " + typeof(hour1));
    // console.log("date1 : " + typeof(hour2));
    // console.log("date1 : " + typeof(min1));
    // console.log("date1 : " + typeof(min2));

    if(sign1 == sign2){
        hour_diff = Math.abs(hour1 - hour2);
        min_diff = Math.abs(min1 - min2);
        console.log("Difference is " + hour_diff + " hours and " + min_diff + " minutes");
    }
    else if(sign1 != sign2){
        hour_diff = Math.abs(hour1 + hour2);
        min_diff = Math.abs(min1 + min2);
        console.log("Difference is " + hour_diff + " hours and " + min_diff + " minutes");
    }


    if(sign1 == '+' && sign2 == '+'){
        if(hour1 > hour2){
            console.log(city + " is ahead");
        }
        else if(hour2 > hour1){
            console.log(city2 + "is ahead");
        }

        else if(hour1 == hour2){
            if(min1 > min2){
                console.log(city + " is ahead");
            }
            else if(min2 > min1){
                console.log(city2 + "is ahead");
            }
            else{
                console.log("No difference");
            }
        }
    }
    

    if(sign1 == "-" && sign2 == "-"){
        if(hour1 < hour2){
            console.log(city + " is ahead");
        }
        else if(hour2 < hour1){
            console.log(city2 + "is ahead");
        }

        else if(hour1 == hour2){
            if(min1 < min2){
                console.log(city + " is ahead");
            }
            else if(hour2 < hour1){
                console.log(city2 + "is ahead");
            }
            else{
                console.log("No difference");
            }
        }
    }

    if(sign1 != sign2){
        if(sign1 == '+'){
            console.log(city + " is ahead");
        }
        else if(sign2 == '+'){
            console.log(city2 + "is ahead");
        }
        else{
            console.log("Error");
        }
    }

    // if(){

    // }
    // else if(sign)
    
    // console.log("date1 : " + typeof(date1));
    // console.log("date1 : " + typeof(date2));

    

    // diffMin = (Date.parse(date1) - Date.parse(date2));
    // console.log("difference is: " + diffMin);

    // console.log("Date1 : " + date1);
    // console.log("Date2 : " + date2);
    // var dater1 = new Date();
    // dater1.setTime(Date.parse(date1));
    // var dater2 = new Date();
    // dater2.setTime(Date.parse(date2));
    
    
    // console.log("Dater1 : " + dater1);
    // console.log("Dater2 : " + dater2);
    

    

}

// function differencer(dater1, dater2){
//     diffMin = (dater1 - dater2) / 60000;
//     console.log("difference is: " + diffMin);
// }












    // console.log(data2);
    // 
    
 
    // var dater1 = new Date();
    // dater1.setTime(Date.parse(date1));
    // var dater2 = new Date();
    // dater2.setTime(Date.parse(date2));


    // var diffMin = (dater1 - dater2) / 60000;
    // console.log("difference is: " + diffMin);