import PageHeader from "@components/common/PageHeader";
import TabList from "@components/common/tabLists/TabList";
import { getWeekList } from "@utils/date";
import { useState } from "react";

const SchedulePage = () => {

  // 글로벌 탭 리스트: 코치
  const [coachList, ] = useState();

  // 로컬 탭 리스트

  // 주차별
  // Default는 오늘 날짜기준 월을 구하기
  const date = new Date();
  
  // 월을 기준으로 주차 및 날짜 구분하기
  const weekList = getWeekList(date);

  // 월이 바뀌면 바꿔서 가져오기

  // > 그에 따른 시작날짜 및 종료날짜를 가져오기. 기준은 월화수목금 토일

  // 요일별



  return (
    <>
      <PageHeader title={"스케줄"} />
      <TabList />
      <TabList />
    </>
  )
}

export default SchedulePage;