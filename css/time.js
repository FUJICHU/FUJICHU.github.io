function PrefixInteger(num, length) {
    return (Array(length).join('0') + num).slice(-length);}
function set_time(){
    var today=new Date();
    var hours=PrefixInteger(today.getHours(),2);
    var minutes=PrefixInteger(today.getMinutes(),2);
    var seconds=PrefixInteger(today.getSeconds(),2);
    var milliseconds=PrefixInteger(today.getMilliseconds(),3);
    document.getElementById("time_hours").innerHTML=hours;
    document.getElementById("time_minutes").innerHTML=minutes;
    document.getElementById("time_seconds").innerHTML=seconds;
    document.getElementById("time_milliseconds").innerHTML=milliseconds;
}
setInterval("set_time()");
function set_date(){
    var today=new Date();
    var year=PrefixInteger(today.getFullYear(),4);
    var month=PrefixInteger((today.getMonth()+1),2);
    var date=PrefixInteger(today.getDate(),2);
    document.getElementById("date1").innerHTML=year+"-"+month+"-"+date+" 22:00止";
    document.getElementById("date2").innerHTML=year+"年"+month+"月"+date+"日";
}
setInterval("set_date()");
