import styled from "@emotion/styled";
import { Dispatch, ReactElement, SetStateAction } from "react";

type ObjectProps = { [key: string]: string };

interface ListProps {
  state?: string;
  setState?: Dispatch<SetStateAction<string>>;
  list?: Array<ObjectProps>;
  borderBottom?: string;
  onClick?: () => void;
};

const TabList = ({ state, setState, list, borderBottom, onClick }: ListProps): ReactElement => {

  console.log(state);
  // console.log(setState);
  console.log(list);
  console.log(borderBottom);

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