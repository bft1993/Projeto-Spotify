import logo from "../../../assets/u2.jpg";
import logo2 from "../../../assets/u22.jpg";
import { Gradient } from "../../components/Gradient";
import { Logo, Logo2, Container, Title, U1Text, U22Text, U2Text, U3Text } from "./styles";
import { StatusBar } from "expo-status-bar";

export default function Album () {

  return (
    <Container>
      <Logo source={logo}/>
      <Gradient />
      <Title>Songs Of Innocence</Title>
      <Logo2 source={logo2}/>
      <U1Text>U2</U1Text>
      <U22Text>Álbum 2014</U22Text>
      <U2Text>The Miracle (Of Joey Ramone)</U2Text>
      <U3Text>U2</U3Text>
      <U2Text>Every Breaking Wave</U2Text>
      <U3Text>U2</U3Text>
      <U2Text>California (There Is No End To Love)</U2Text>
      <U3Text>U2</U3Text>
      <U2Text>Song For Someone</U2Text>
      <U3Text>U2</U3Text>
      {/* <U2Text>Iris (Hold Me Close)</U2Text>
      <U3Text>U2</U3Text> */}
      {/* <U2Text>Volcano</U2Text>
      <U3Text>U2</U3Text> */}
      {/* <U2Text>Raised By Wolves</U2Text>
      <U3Text>U2</U3Text> */}
      {/* <InputTitle
      placeholder={'Songs Of Innocence'}
      placeholderTextColor={'#ffff} />
      <Text>Cedarwood Road</Text>
      <Text>U2</Text>
      <Text>Sleep Like A Baby Tonight</Text>
      <Text>U2</Text>
      <Text>This Is Where You Can Reach Me Now</Text>
      <Text>U2</Text>
      <Text>The Troubles</Text>
      <Text>U2</Text>
      <Text>1 de janeiro de 2014</Text>
      <Text>U2</Text>
      <Text>Mais que talvez você goste</Text>
      <Text>This Is U2</Text>
      <Text>10s Soft Rock</Text>
      <Text>This Is</Text>
      <Text>2014 Island Records, a division of Universal</Text>
      <Text>Music Operations Limited</Text>
      <Text>The Miracle (Of Joey Ramone)</Text>
      <Text>U2</Text>
      <Text>Início</Text>
      <Text>Buscar</Text>
      <Text>Sua Biblioteca</Text>
      <Text>Premium</Text> */}
      <StatusBar style="auto" />
    </Container>
  );
}