var moment = require('moment');

var lastModifiedTime = "2017-07-25T02:09:14+09:00"
var dateArr = lastModifiedTime.split('T')[0].split('-');
var timeArr = lastModifiedTime.split('T')[1].split(':');
var date = dateArr[0] + dateArr[1] + dateArr[2];
var time = Number(timeArr[0] + timeArr[1]);
time = time - (time % 100) - 100;

// TODO : 동기화 보장
if (time < 0) { // time이 00시--분이라면 하루 빼고 2300만들기
    time = '2300'
    date = moment(date).add(-1, 'days').format('YYYYMMDD'); // 하루 빼고 2300
} else { // 그 외
    var tmp = '0000';
    time += "";
    tmp = tmp.substring(time.length);
    tmp += time;
    time = tmp;
}
console.log("date : " + date);
console.log("time : " + time);

if(Number(time) <= 100 && timeArr[1] < 10)
  date = moment(date).add(-1, 'days').format('YYYYMMDD'); // 하루 빼고 2300

console.log("date : " + date);
console.log("time : " + time);
console.log(moment().format())
