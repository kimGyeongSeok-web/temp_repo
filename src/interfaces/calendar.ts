import { ObjectProps } from "./common";

export interface WeekListProps {
  calendarYear: number;
  calendarMonth: number,
  currentDate: number,
  weekTabList: Array<ObjectProps<string>>,
  dateList: Array<{
    weekNumber: number;
    dateWeekList: Array<ObjectProps<number | string>>;
  }>
};