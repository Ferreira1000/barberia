import React from 'react';
import * as Application from 'expo-application';
import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton,
  Button

} from './styles';

import Header from '../../components/Header';


//Funcao  Tela Login 
function Cadastro() {
    return(
      <KeyboardView>
        <Header />
        <Container>
          <Title>Cadastro</Title>
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
  
    )
  
    
  }
  export default Cadastro;
  