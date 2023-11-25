import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList, Image, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Os melhores sabores de sorvete
      </Text>

      <FlatList
        data={arrayDados}
        renderItem={({item})=>
       <SafeAreaView style={styles.containerSorvete}>
        <Text style={styles.textoSorvete}> {item.sorvete}</Text>
        <Image style={styles.imgSorvete} source={item.img}/>
       </SafeAreaView> 
      }
      />
    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBE5C3',
    padding: 8,
  },

  paragraph: {
    margin: 24,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textoSorvete: {
    fontSize: 28,
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#95E3D7',
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold'
  },
 
  imgSorvete: {
    width: 300,
    height: 260,
    margin: 20,
    marginBottom: 60,
    alignSelf: 'center'
  }

});

const arrayDados = [
  {sorvete: 'Flocos', img: require('./assets/imagens/flocos.jpg')},
  {sorvete: 'Ovomaltine', img: require('./assets/imagens/ovomaltine.jpg')},
  {sorvete: 'Napolitano', img: require('./assets/imagens/napolitano.jpg')},
  {sorvete: 'Abacaxi ao vinho', img: require('./assets/imagens/abacaxiAoVinho.jpg')},
  {sorvete: 'Trufado', img: require('./assets/imagens/trufado.jpg')},
  {sorvete: 'Céu azul', img: require('./assets/imagens/ceuAzul.jpg')},
  {sorvete: 'Maracujá', img: require('./assets/imagens/maracuja.jpg')},
  {sorvete: 'Chiclete', img: require('./assets/imagens/chiclete.jpg')},
  {sorvete: 'Sensação', img: require('./assets/imagens/sensacao.jpg')},
  {sorvete: 'Morango', img: require('./assets/imagens/morango.jpg')},
  {sorvete: 'Chocolate', img: require('./assets/imagens/chocolate.jpg')},
  {sorvete: 'Chocomenta', img: require('./assets/imagens/chocomenta.jpg')},
  {sorvete: 'Limão', img: require('./assets/imagens/limao.jpg')},
  {sorvete: 'Cereja', img: require('./assets/imagens/cereja.jpg')},
];

