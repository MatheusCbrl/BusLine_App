import styled from "styled-components/native";

export const Container = styled.View`
  background: #e5e5e5;
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #ddd;
  align-items: center;
`;

export const TypeTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #222;
`;

export const TypeDescription = styled.Text`
color: #FF3D00;
font-size: 14px;
text-align: center;
align-items: center;
font-weight: bold;
`;

export const ContainerTab = styled.View`
  background: #e5e5e5;
  height: 46px;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
  padding: 20px;
`;
export const ContainerTop = styled.View`
  background: #e5e5e5;
  height: 30px;
  width: 100%;
  position: absolute;
  top: 0;
  elevation: 1;
  borderBottomLeftRadius: 15;
  borderBottomRightRadius: 15;
  padding: 5px;
  align-items: center;
`;
export const ContainerTopLines = styled.View`
  background: transparent;
  height: 55px;
  width: 100%;
  position: absolute;
  top: 0;
  borderBottomLeftRadius: 15;
  borderBottomRightRadius: 15;
  padding: 5px;
`;