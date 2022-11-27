import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Title2, InputLogin, InputPassword, LoginButton, LoginButton2, LoginText, LoginText2 } from "./styles";
import { StatusBar } from "expo-status-bar";
//import { Icon } from 'react-native-vector-icons/AntDesign';
export default function Login() {
  
  const [user, setUser] = useState({
    login: '',
    senha: '',
  });
  const navigation = useNavigation();
  
  function screenAlbum() {
    navigation.navigate("Album");
  }

  return (
    <Container>
      <Title>Email ou nome de usuário</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholderTextColor={'gray'}
      />
      <Title2>Senha</Title2>
      <InputPassword
        value={user.senha}
        onChangeText={setUser}
        placeholderTextColor={'gray'}
        //style={style.Icon}
      />
      {/* <Icon name='eyeo' /> */}

      <LoginButton onPress={screenAlbum}>
            <LoginText>Entrar</LoginText>
      </LoginButton>
      <LoginButton2 onPress={screenAlbum}>
            <LoginText2>Entrar sem senha</LoginText2>
      </LoginButton2>
      <StatusBar style="auto" />
    </Container>
  );
}




