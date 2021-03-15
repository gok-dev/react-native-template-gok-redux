import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { MainActions } from 'store/ducks/main';

import { Container, Logo, Welcome, File, Instructions } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const { title } = useSelector(state => state.main);

  useEffect(() => {
    dispatch(MainActions.setTitleRequest());
  }, [dispatch]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Logo
        source={{
          uri:
            'https://s3-sa-east-1.amazonaws.com/prod-jobsite-files.kenoby.com/uploads/goKdigital-1570109201-gopng.png',
        }}
        resizeMode="contain"
      />
      <Welcome>{title}</Welcome>
      <Instructions>Essa é a tela principal da sua aplicação =)</Instructions>
      <Instructions>Você pode editar a tela no arquivo:</Instructions>
      <File>src/pages/Main/index.tsx</File>
    </Container>
  );
}
