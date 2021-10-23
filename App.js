import React,{useState} from "react";//Importando a bibilhoteca
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from "react-native";//IMPORTANDO TAGS 


//CRIANDO COMPONENTE APP
export default function App(){
  const [peso,setPeso]= useState('');//ARMAZENA O PESO DIGITADO
  const [altura,setAltura] = useState('');

//RETORNA O JSX PRESENTE NA VIEW  ELE SERA A INTERFACE DO APLICATICO]
//VIEW E COMO SE FOSSE A DIV EM HTML
//TEXT É TUDO ESCRITO
//TEXT INPUT É O CAMPO DE ENTRADA

function submit(){
  const alt = altura/100;
  const imc = peso/(alt * alt);
  

}


return (
  <View style = {Estilo_1.container}> 

  <Text style = {Estilo_1.titulo}>Calcule seu IMC aqui !!!!</Text>

    <TextInput
      style = {Estilo_1.entrada}
      value = {peso}//VALOR DENTRO DA ENTRADA ARMAZENADO ATRAVES DO IMPORT USESTADE
      onChangeText={(peso) => setPeso(peso)} //SALVA OS DADOS DENTRO DE UMA VARIAVEL ATRAVES DO SET Q RECEBE O PESO
      placeholder = 'Digite seu peso'
      keyboardType = "numeric"
    
    />

<TextInput
      style = {Estilo_1.entrada}
      value = {altura}//VALOR DENTRO DA ENTRADA ARMAZENADO ATRAVES DO IMPORT USESTADE
      onChangeText={(altura) => setAltura(altura)} //SALVA OS DADOS DENTRO DE UMA VARIAVEL ATRAVES DO SET Q RECEBE O PESO
      placeholder = 'Digite sua altura'
      keyboardType = "numeric"
    
    />


  //BOTAO COM O EFEITO VIADO
  <TouchableOpacity 
  style = {Estilo_1.botao}
  onPressIn = {submit}
  >

  <Text>
  Calcular
  </Text>

  </TouchableOpacity>



  </View>
)
}
//STYLESHEET É TIPO O CSS DA PARADA
//EU IMPORTO ELE NA VIEW QUE EU QUERO QUE O MESMO FUNCIONE
const Estilo_1 = new StyleSheet.create({
  container:{
    flex:1,
   // backgroundColor:'black',
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    
  },
  titulo:{
  
    color:'green',
    fontSize:'30px',
    marginTop:'10px',
  },

  entrada:{
    backgroundColor:'black',
    borderRadius:'10px',
    padding:'15px',
    color:'white',
    marginTop:'10px',

  },

  botao:{
    margin:15,
    padding:10,
    backgroundColor:'#41aef4',
    
    borderRadius:'3px',

  }



  

  



});




