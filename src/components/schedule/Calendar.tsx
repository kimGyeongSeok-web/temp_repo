import styled from "@emotion/styled";
import { Button, CSS_TYPE, ImageContainer as Image } from "@styles/styles";
import { colorList } from "@utils/colorSet";
import { ObjectProps } from "@interfaces/common";
import SingleArrowLeftIcon from "@icons/grey_single_arrow_left.svg";
import SingleArrowRightIcon from "@icons/grey_single_arrow_right.svg";
import WriteIcon from "@icons/edit_white.svg";
import { getTimeZoneList, getPrevNextMonth } from "@utils/date";
import { Dispatch, SetStateAction } from "react";

interface T{
  [key: string]: number;
};

interface CalendarProps {
  courtList: Array<ObjectProps<string>>;
  calendarDate: T;
  setCalendarDate: Dispatch<SetStateAction<{
    year: number;
    month: number;
  }>>
};

const Calendar = ({ courtList, calendarDate, setCalendarDate }: CalendarProps) => {

  const { year, month } = calendarDate;

  const { timeList } = getTimeZoneList();

  // 몇년 몇월인지

  // 몇주차인지

  // 코트의 갯수 및 종류

  // 예약리스트

  const onClickPrevMonthHandler = () =>{
    const { prevDate } = getPrevNextMonth(year, month);
    setCalendarDate({
      year: prevDate.year,
      month: prevDate.month
    });
  };

  const onClickNextMonthHandler = () =>{
    
    const { nextDate } = getPrevNextMonth(year, month);
    setCalendarDate({
      year: nextDate.year,
      month: nextDate.month
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <CourtLists>
          {
            (courtList && courtList.length > 0) && courtList.map((item, index) => {
              return (
                <CourtList
                  key={item.id}
                  backgroundColor={colorList[index]}
                >{item.name}</CourtList>
              )
            })
          }
          <CourtList backgroundColor={"rgba(164, 164, 164, 100)"}>야외</CourtList>
        </CourtLists>
        <CalendarHeaderContainer>
          <Image
            src={SingleArrowLeftIcon}
            alt="prev button"
            width={24}
            height={24}
            cursor={"pointer"}
            onClick={onClickPrevMonthHandler}
          />
          {year}년 {month}월
          <Image
            src={SingleArrowRightIcon}
            alt="next button"
            width={24}
            height={24}
            cursor={"pointer"}
            onClick={onClickNextMonthHandler}
          />
        </CalendarHeaderContainer>
        <HeaderBtnContainer>
          <Button
            display={"flex"}
            alignItems={"center"}
            fontSize={"1rem"}
            fontWeight={"400"}
            color={"var(--basic-white-color)"}
            backgroundColor={"var(--business-active-color)"}
            margin={"0 0 0 auto"}
          >
            <Image
              src={WriteIcon}
              alt={"calendar register"}
              width={16}
              height={16}
              margin={"0 4px 0 0"}
            />스케줄 등록하기
          </Button>
        </HeaderBtnContainer>
      </HeaderContainer>
      <WeekHeaderContainer>
        <WeekDayContainer>
          <DayWrapper>월요일</DayWrapper>
          <DayEventContainer>이벤트</DayEventContainer>
        </WeekDayContainer>
        <WeekDayContainer>
          <DayWrapper>월요일</DayWrapper>
          <DayEventContainer>이벤트</DayEventContainer>
        </WeekDayContainer>
        <WeekDayContainer>
          <DayWrapper>월요일</DayWrapper>
          <DayEventContainer>이벤트</DayEventContainer>
        </WeekDayContainer>
        <WeekDayContainer>
          <DayWrapper>월요일</DayWrapper>
          <DayEventContainer>이벤트</DayEventContainer>
        </WeekDayContainer>
        <WeekDayContainer>
          <DayWrapper>월요일</DayWrapper>
          <DayEventContainer>이벤트</DayEventContainer>
        </WeekDayContainer>
        <WeekDayContainer>
          <DayWrapper>월요일</DayWrapper>
          <DayEventContainer>이벤트</DayEventContainer>
        </WeekDayContainer>
        <WeekDayContainer>
          <DayWrapper>월요일</DayWrapper>
          <DayEventContainer>이벤트</DayEventContainer>
        </WeekDayContainer>
      </WeekHeaderContainer>
      <CalendarContainer>
        <TimeZoneContainer>
          <ul>
            {
              (timeList && timeList.length > 0) && timeList.map((item) => {
                return (
                  <TimeList key={item}>
                    {item}
                  </TimeList>
                )
              })
            }
          </ul>
        </TimeZoneContainer>
        <WeekContainer>
          <DateContainer>
            <DateEventLists>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
            </DateEventLists>
          </DateContainer>
          <DateContainer>
            <DateEventLists>
            <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
            </DateEventLists>
          </DateContainer>
          <DateContainer>
            <DateEventLists>
            <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
            </DateEventLists>
          </DateContainer>
          <DateContainer>
            <DateEventLists>
            <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
            </DateEventLists>
          </DateContainer>
          <DateContainer>
            <DateEventLists>
            <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
            </DateEventLists>
          </DateContainer>
          <DateContainer>
            <DateEventLists>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
            </DateEventLists>
          </DateContainer>
          <DateContainer>
            <DateEventLists>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
              <DateEventList>월요일 컨테이너 영역</DateEventList>
            </DateEventLists>
          </DateContainer>
        </WeekContainer>
      </CalendarContainer>
    </Container>
  )
};

const Container = styled.div({
  position: "relative",
  height: "calc(80% - 16px)",
  margin: "8px 0 0 0",
  padding: "8px 0 0 0"
});
const HeaderContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid var(--basic-grey-color)",
  padding: "0 0 16px 0"
});
const CourtLists = styled.ul({
  width: "calc(100% / 3)",
  display: "flex",
  alignItems: "center"
});
const CourtList = styled.li<CSS_TYPE>(
  {
    borderRadius: "8px",
    padding: "0.3rem 0.9rem",
    margin: "0 8px 0 0",
    color: "var(--basic-white-color)"
  },
  props => ({
    backgroundColor: props.backgroundColor ? props.backgroundColor : "var(--basic-white-color)"
  })
);
const CalendarHeaderContainer = styled.div({
  width: "calc(100% / 3)",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  fontSize: "1.1rem"
});
const HeaderBtnContainer = styled.div({
  width: "calc(100% / 3)",
  textAlign: "right"
});
const WeekHeaderContainer = styled.div({
  position: "relative",
  display: "flex",
  width: "100%",
  padding: "0 0 0 6%",
  borderBottom: "1px solid var(--basic-grey-color)",
});
const WeekDayContainer = styled.div({
  width: "calc(100% / 7)",
  borderLeft: "1px solid var(--basic-grey-color)",

  ":nth-last-of-type(1)": {
    borderRight: "1px solid var(--basic-grey-color)"
  }
});
const DayWrapper = styled.div({
  height: "36px",
  lineHeight: "36px",
  textAlign: "center",
  borderBottom: "1px solid var(--basic-grey-color)",
});
const DayEventContainer = styled.div({
  padding: "0.4rem 0.6rem",
});
const CalendarContainer = styled.div({
  position: "relative",
  width: "100%",
  height: "82%",
  display: "flex",
  overflowY: "scroll",

  "::-webkit-scrollbar": {
    scrollBehavior: "smooth",
    display: "none"
  }
});
const TimeZoneContainer = styled.div({
  position: "relative",
  width: "6%",
  height: "calc(100% - 36px)",
  padding: "4px 0 0 0",
});
const TimeList = styled.li({
  position: "relative",
  height: "52px",
  textAlign: "center",
});
const WeekContainer = styled.div({
  position: "relative",
  width: "94%",
  height: "100%",
  display: "flex",
  fontSize: "0.8rem"
});
const DateContainer = styled.div({
  width: "calc(100% / 7)",

  ":nth-last-of-type(1) > ul > li": {
    borderRight: "1px solid var(--basic-grey-color)"
  }
});
const DateEventLists = styled.ul({

});
const DateEventList = styled.li(
  {
    position: "relative",
    height: "52px",
    padding: "0.4rem 0.6rem",
    borderBottom: "1px solid var(--basic-grey-color)",
    borderLeft: "1px solid var(--basic-grey-color)",
  },
  props => ({

  })
);

export default Calendar;