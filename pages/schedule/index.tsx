import { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import PageHeader from "@components/common/PageHeader";
import TabList from "@components/common/TabList";
import ButtonContainer from "@components/schedule/ButtonContainer";
import { getWeekList } from "@utils/date";
import { WeekListProps } from "src/interfaces/calendar";
import Calendar from "@components/schedule/Calendar";

const SchedulePage = () => {

  // TODO Data Fetching
  const coachArr = [
    {
      id: uuidV4(),
      name: "전체",
      value: "all",
      status: "active"
    },
    {
      id: uuidV4(),
      name: "Jane",
      value: "jane",
      status: "active"
    },
    {
      id: uuidV4(),
      name: "Marin",
      value: "marin",
      status: "active"
    },
    {
      id: uuidV4(),
      name: "Taeil",
      value: "taeil",
      status: "active"
    }
  ];

  const courtArr = [
    {
      id: uuidV4(),
      name: "코트1",
      value: "court1"
    },
    {
      id: uuidV4(),
      name: "코트2",
      value: "court2"
    },
    {
      id: uuidV4(),
      name: "코트3",
      value: "court4",
    },
    {
      id: uuidV4(),
      name: "코트4",
      value: "court4",
    }
  ];

  // 글로벌 탭 리스트: 코치
  const [currentCoach, setCurrentCoach] = useState<string>(coachArr[0].id);
  const [coachList,] = useState(coachArr);

  // 주차별 및 요일별 보기 구분
  const [viewCategory, setViewCategory] = useState("week");

  // 월을 기준으로 주차 및 날짜 구분하기
  const { calendarYear, calendarMonth, currentDate, weekTabList, dateList }: WeekListProps = getWeekList();

  // 주차별 탭 목록
  const [calendarDate, setCalendarDate] = useState({
    year: calendarYear,
    month: calendarMonth,
  });
  const [currentWeek, setCurrentWeek] = useState<string>(weekTabList[0].id);
  const [weekList,] = useState(weekTabList);

  const [courtList,] = useState(courtArr);

  useEffect(() => {

  }, [])

  return (
    <>
      <PageHeader title={"스케줄"} />
      <TabList state={currentCoach} setState={setCurrentCoach} list={coachList} />
      <ButtonContainer viewCategory={viewCategory} setViewCategory={setViewCategory} />
      <TabList state={currentWeek} setState={setCurrentWeek} list={weekList} borderBottom={true} />
      <Calendar
        courtList={courtList}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
      />
    </>
  )
}

export default SchedulePage;