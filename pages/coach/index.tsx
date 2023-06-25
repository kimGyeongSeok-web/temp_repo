import Filter from "@components/common/Filter";
import PageHeader from "@components/common/PageHeader";

const CoachPage = () =>{
  return(
    <>
      <PageHeader title={"코치 목록"} />
      <Filter />
      <div>검색</div>
      <div>탭</div>
      <div>내용</div>
    </>
  )
};

export default CoachPage;