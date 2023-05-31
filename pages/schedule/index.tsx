import PageHeader from "@components/common/PageHeader";
import TabList from "@components/common/tabLists/TabList";
import { getWeekList } from "@utils/date";
import { useState } from "react";

const SchedulePage = () => {

  const coachArr = [
    {
      id: "",
      name: "전체",
      value: "",
      status: "active"
    },
    {
      id: "od-3alsdla-edkasi-dkasdk",
      name: "Jane",
      value: "",
      status: "active"
    },
    {
      id: "s3-f0ksdla-edkasi-dkasdk",
      name: "Marin",
      value: "",
      status: "active"
    },
    {
      id: "kz-3algsia-edkasi-dkasdk",
      name: "Taeil",
      value: "",
      status: "active"
    }
  ]

  // 글로벌 탭 리스트: 코치
  const [currentCoach, setCurrentCoach] = useState<string>("all");
  const [coachList,] = useState(coachArr);

  // 주차별 및 요일별 보기 구분
  const [viewCategory, setViewCategory] = useState();

  // 로컬 탭 리스트

  // 월을 기준으로 주차 및 날짜 구분하기
  const weekList = getWeekList();

  console.log(weekList);

  return (
    <>
      <PageHeader title={"스케줄"} />
      <TabList state={currentCoach} setState={setCurrentCoach} list={coachList} />
      <TabList />
    </>
  )
}

export default SchedulePage;