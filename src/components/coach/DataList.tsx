import styled from "@emotion/styled";

const DataList = () => {
  return (
    <Container>
      <CoachCardContainer>
        <CoachLists>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
          <CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList><CoachList>
            <CardBackGroundWrapper />
            <CoachProfileImageWrapper>프로필 이미지 영역</CoachProfileImageWrapper>
            <CoachProfileContentContainer>정보 있는 곳</CoachProfileContentContainer>
          </CoachList>
        </CoachLists>
      </CoachCardContainer>
    </Container>
  )
}

const Container = styled.div({
  position: "relative",
});
const CoachCardContainer = styled.div({
  position: "relative",
});
const CoachLists = styled.ul({
  position: "relative",
  width: "100%",
  display: "flex",
  flexWrap: "wrap"
});
const CoachList = styled.li({
  position: "relative",
  width: "calc((100% / 6) - 48px)",
  height: "240px",
  textAlign: "center",
  borderRadius: "25px",
  boxShadow: "1px 1px 25px 0px rgba(132, 132, 132, 0.25)",

  ":nth-of-type(2n)": {
    margin: "0 12px"
  }
});
const CardBackGroundWrapper = styled.div({
  position: "relative",
  width: "100%",
  height: "30%",
  borderRadius: "25px 25px 0 0",
  backgroundColor: "var(--basic-alice-blue-color)",
});
const CoachProfileImageWrapper = styled.div({

});
const CoachProfileContentContainer = styled.div({

});

export default DataList;