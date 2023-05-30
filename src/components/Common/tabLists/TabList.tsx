import styled from "@emotion/styled";
import { ReactElement } from "react";

type ObjectProps = { [key: string]: string };

interface ListProps {
  state?: any;
  setState?: any;
  list?: Array<ObjectProps>;
  borderBottom?: string;
  onClick?: () => void;
};

const TabList = ({ }: ListProps): ReactElement => {
  return (
    <Container>
      <Lists>
        <List>일반적인 탭 리스트</List>
      </Lists>
    </Container>
  )
};

const Container = styled.div({});
const Lists = styled.ul({});
const List = styled.li({});

export default TabList;