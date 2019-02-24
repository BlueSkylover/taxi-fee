//taix_fee=wait_time*0.25+Freight_fee;
// Calculate in one minute when the waiting time is less than one minute
// 路程s   s<=2      Freight_fee=6;
//         2<s<=8    Freight_fee=6+(s-2)*0.8;
//         8<s       Freight_fee=6+(8-2)*0.8+(s-8)*0.8*1.5;
module.exports =function fizzbuzz(number,time){
     let times=(time%60>0)?(parseInt(time/60)+1):(time/60);
     let fee=6+times*0.25;
     if(number>2 && number<=8){
         fee += (number-2)*0.8;
     }
     if(number>8){
         fee +=6*0.8+(number-8)*0.8*1.5;
     }
     return Math.round(fee);
}


