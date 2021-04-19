import styled from 'styled-components';

export const ItemCart = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
`;

export const ImgProduct = styled.img`
  width: 30px;
  height: 30px;
`;
export const Title = styled.h3`
  font-size: 12px;
`;
export const BtnAction = styled.button`
  border: 0;
  padding: 5px;
  background-color: transparent;
  > svg {
    color: #c21711;
  }
`;
