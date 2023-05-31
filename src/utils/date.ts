/**
 * getDay(): 주어진 날짜의 첫 번째 날짜의 요일 정보를 반환
 * getDate(): 주어진 날짜의 일을 반환(ex, 28일)
 */
const STRING_WEAK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * 입력 날짜에 해당하는 주차 및 리스트 반환
 * @param { args } Date 객체
 * @returns Object Array
 */
export const getWeekList = (args?: Date): object =>{

  const date = args ? new Date(args) : new Date();

  const calendarYear = date.getFullYear();
  const calendarMonth = date.getMonth() + 1;
  let calendarDay = 1;

  const currentDate = date.getDate();
  const monthStartDay = new Date(calendarYear, date.getMonth(), 1);
  const monthLastDate = new Date(calendarYear, calendarMonth, 0);

  const calendarMonthStartDay = monthStartDay.getDay();
  const calendarMonthLastDate = monthLastDate.getDate();

  const calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7); // (당일 + 첫요일)

  let dateList = [];
  let isCheckMonthStartDay = 0;
  
  for(let monthWeekCount = 1; monthWeekCount <= calendarWeekCount; monthWeekCount++){
    for(let weekCount = 0; weekCount < 7; weekCount++){
      if(calendarMonthStartDay <= isCheckMonthStartDay && calendarDay <= calendarMonthLastDate){
        dateList.push({
          week: monthWeekCount,
          date: calendarDay,
          day: STRING_WEAK[weekCount]
        })
        calendarDay++;
      };
      isCheckMonthStartDay++;
    };
  };

  return {
    calendarYear: calendarYear,
    calendarMonth: calendarMonth,
    currentDate: currentDate,
    dateList: dateList
  };
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