/**
 * getDay(): 주어진 날짜의 첫 번째 날짜의 요일 정보를 반환
 * getDate(): 주어진 날짜의 일을 반환(ex, 28일)
 */

const STRING_WEAK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * 입력 날짜의 주차를 반환(ex, 1주차)
 * @param { args } Date 객체
 * @returns (ex, 1주차)
 */
export const getWeek = (args?: Date) =>{

  const date = new Date(args ? args : "");
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();
  
  return Math.ceil((currentDate + firstDay) / 7);
};


export const getWeekList = (args: Date) =>{

  // args > 월이 바뀌는 값

  const date = new Date("2023-06-30");

  console.log(date);
  
  const calendarYear = date.getFullYear();
  const calendarMonth = date.getMonth() + 1;

  const currentDate = date.getDate();
  const monthStartDay = new Date(calendarYear, date.getMonth(), 1);
  const monthLastDate = new Date(calendarYear, calendarMonth, 0);

  const calendarMonthStartDay = monthStartDay.getDay();
  const calendarMonthLastDate = monthLastDate.getDate()

  const calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7); // (당일 + 첫요일)

  console.log(calendarMonthStartDay);
  console.log(STRING_WEAK[calendarMonthStartDay])
  console.log(calendarMonthLastDate);
  console.log(calendarWeekCount);

  // 첫 째날과 요일
  // 마지막 날과 요일
  // 몇주차까지 있는지
};


// const date = new Date(args ? args : "");
  
//   const todayWeek = date.getDay();
//   const currentDate = date.getDate();
//   const firstDay = new Date(date.setDate(1)).getDay();
//   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // 주어진 날짜의 마지막 날짜

  

//   let dates = [];
//   for(let index = 1; index <= 7; index++){
//     dates.push({
//       week: 1,
//     });
//   }

//   // console.log(date);
//   // console.log(todayWeek);
//   // console.log(currentDate);
//   // console.log(lastDay);
//   console.log(dates);