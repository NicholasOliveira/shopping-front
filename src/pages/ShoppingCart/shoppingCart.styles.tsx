import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 10px;
`;

export const ListCart = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const ItemCart = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-around;
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
  width: 100%;
  font-weight: normal;
  text-align: center;
`;
export const BtnAction = styled.button`
  border: 0;
  padding: 5px;
`;
