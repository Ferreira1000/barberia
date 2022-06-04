// importação das Bibliotecas 
import React from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';
import Header from '../../components/Header';


//Funcao  Tela Login 
export const Signin = ({ navigation }) => (
  
    <KeyboardView>
      <Header />
      <Container>
        <Title>Login</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="E-mail"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        
        <ButtonSubmit  >
          <TextButton>
            Entrar
          </TextButton>
         </ButtonSubmit>
          

         <Button
         title='Cadastrar'
         onPress={() => navigation.navigate('Cadastro')}
       />
      
      </Container>
    </KeyboardView>

  );

  

export default Signin;

