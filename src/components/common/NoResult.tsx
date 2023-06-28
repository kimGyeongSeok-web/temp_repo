import styled from "@emotion/styled";
import infoIcon from "@icons/info.svg";
import { CSS_TYPE, ImageContainer } from "@styles/styles";

const NoResult = ({ height, description }: { height?: string, description: string }) => {
  return (
    <Container height={height}>
      <ScriptContainer>
        <ImageContainer
          src={infoIcon}
          alt={"info icon"}
          width={20}
          height={20}
          margin={"0 6px 0 0"}
        />
        {description}
      </ScriptContainer>
    </Container>
  )
};

const Container = styled.div<CSS_TYPE>(
  {
    position: "relative",
    width: "100%",
    backgroundColor: "var(--basic-grey-4-color)",
    borderRadius: "16px"
  },
  props => ({
    height: props.height ? props.height : "100%"
  })
);
const ScriptContainer = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center"
});

export default NoResult;