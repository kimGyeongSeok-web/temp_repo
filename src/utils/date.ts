import { v4 as uuidV4 } from "uuid";
import { numberZeroFillFormat } from "./numberForm";
import { WeekListProps } from "src/interfaces/calendar";

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
export const getWeekList = (args?: Date): WeekListProps => {

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
  let weekTabList = [];
  let isCheckMonthStartDay = 0;

  for (let monthWeekCount = 1; monthWeekCount <= calendarWeekCount; monthWeekCount++) {

    let dateWeekList = [];
    let startDate: number = 0;
    let endDate: number = 0;

    for (let weekCount = 0; weekCount < 7; weekCount++) {

      if (weekCount === 0)
        startDate = calendarDay;

      if (weekCount === 6)
        endDate = calendarDay > calendarMonthLastDate ? calendarMonthLastDate : calendarDay;

      if (calendarMonthStartDay <= isCheckMonthStartDay && calendarDay <= calendarMonthLastDate) {
        dateWeekList.push({
          date: calendarDay,
          day: STRING_WEAK[weekCount]
        })
        calendarDay++;
      };
      isCheckMonthStartDay++;
    };

    const startWeekDate = numberZeroFillFormat(calendarMonth, 2) + "." + numberZeroFillFormat(startDate, 2);
    const endWeekDate = numberZeroFillFormat(calendarMonth, 2) + "." + numberZeroFillFormat(endDate, 2);

    weekTabList.push({
      id: uuidV4(),
      name: `${monthWeekCount}주차 (${startWeekDate} ~ ${endWeekDate})`,
      startWeekDate: startWeekDate,
      endWeekDate: endWeekDate,
      value: startWeekDate + " ~ " + endWeekDate
    });

    dateList.push({
      weekNumber: monthWeekCount,
      dateWeekList: dateWeekList
    });
  };

  return {
    calendarYear: calendarYear,
    calendarMonth: calendarMonth,
    currentDate: currentDate,
    weekTabList: weekTabList,
    dateList: dateList
  };
};

export const getTimeZoneList = () => {

  let timeList = [];
  for (let index = 0; index <= 24; index++) {
    timeList.push(
      `${numberZeroFillFormat(index, 2)}:00`
    );
  };

  return {
    timeList: timeList
  }
}

export const getPrevNextMonth = (year: number, month: number) =>{

  const dateMonth = month - 1;

  const prevDate = new Date();
  prevDate.setFullYear(month === 1 ? year - 1 : year);
  prevDate.setMonth(month === 1 ? 11 : dateMonth - 1);

  const nextDate = new Date();
  nextDate.setFullYear(month === 12 ? year + 1 : year);
  nextDate.setMonth(month === 12 ? 0 : dateMonth + 1);

  return {
    prevDate: {
      fullDate: prevDate.getFullYear() + "." + (prevDate.getMonth() + 1),
      year: prevDate.getFullYear(),
      month: prevDate.getMonth() + 1
    },
    nextDate: {
      fullDate: nextDate.getFullYear() + "." + (nextDate.getMonth() + 1),
      year: nextDate.getFullYear(),
      month: nextDate.getMonth() + 1
    },
  };
};