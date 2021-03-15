import styled from 'styled-components/native';
import { theme } from 'styled-tools';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-horizontal: 20px;
  background-color: ${theme('colors.background')};
`;

export const Logo = styled.Image`
  width: ${height * 0.11 * (1950 / 662)}px;
  height: ${height * 0.11}px;
  margin-vertical: ${height * 0.11}px;
`;

export const Welcome = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${theme('colors.primary')};
`;

export const Instructions = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: ${theme('colors.text')};
`;

export const File = styled(Instructions)`
  margin-top: 5px;
  font-weight: bold;
`;
