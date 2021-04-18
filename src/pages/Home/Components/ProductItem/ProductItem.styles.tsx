import styled from 'styled-components';

export const Container = styled.li`
  text-align: left;
  max-width: 150px;
  padding: 5px;
  margin: 10px;
`;

export const ImgProduct = styled.img`
  width: 150px;
  height: 150px;
`;
export const Title = styled.h3`
  font-size: 14px;
`;
type BtnActionType = {
  add: string;
};
export const BtnAction = styled.button<BtnActionType>`
  background-color: ${(props) => (props.add ? '#21a537' : '#c21711')};
  border: 0;
  padding: 10px 15px;
`;
