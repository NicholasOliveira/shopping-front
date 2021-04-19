import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  font-size: 10px;
  border-radius: 50%;
  background-color: #ca1717;
  color: #ffffff;
`;
