import { useState } from 'react';
import {Text, View, TextInput, StyleSheet, Button, Alert, StatusBar, ScrollView, KeyboardAvoidingView, Pressable, ActivityIndicator} from 'react-native';
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

const Separator = () => <View style={styles.separator} />;

export default function Inputs ({ navigation }) {

  const [firstw_data, setFirstWData] = useState('');
  const [firsth_data, setFirstHData] = useState('');
  const [second_data, setSecondData] = useState('');
  const [third_data, setThirdData] = useState('');
  const [fourth_data, setFourthData] = useState('');
  const [fith_data, setFithData] = useState('');
  const [six_data, setSixData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // This function will be triggered when the button is pressed
  const toggleLoading = ({navigation}) => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.nativeEvent.text);
  }

    return (
      <>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "height"}>
          <ScrollView>
          <View style={styles.textContainer}>
              <Text style={styles.label}>E-Size</Text>
              <View style={styles.whinput}>
                <TextInput style={styles.textInputw} placeholder='အူ' keyboardType='numeric' onChangeText={setFirstWData} maxLength={4}/>
                <TextInput style={styles.textInputh} placeholder='ထု' keyboardType='numeric' onChangeText={setFirstHData} maxLength={4}/>
              </View>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.label}>တန်း(Turns)</Text>
                <TextInput 
                  style={styles.textInput} 
                  placeholder='10'
                  // value={text}
                  keyboardType='numeric'
                  onChangeText={setSecondData}
                  maxLength={2}
                />
              </View>
              <Separator/>
              <View style={styles.textContainer}>
              <MaterialCommunityIcons style={styles.icons} name="water-percent" size={50} color="black" />
                <Text style={styles.label}>ရာခိုင်နှုန်း</Text>
                <TextInput 
                  style={styles.textInput} 
                  placeholder='%'
                  keyboardType='numeric'
                  // value={text}
                  onChangeText={setThirdData}
                  maxLength={5}
                />
              </View>
              <Separator/>
              <View style={styles.textContainer}>
              <Octicons style={styles.icons} name="number" size={50} color="black" />
                <Text style={styles.label}>အပင်အရေအတွက်</Text>
                <TextInput 
                  style={styles.textInput} 
                  placeholder='10'
                  keyboardType='numeric'
                  // value={text}
                  onChangeText={setFourthData}
                  maxLength={2}
                />
              </View>
              <Separator/>
              <View style={styles.textContainer}>
              <MaterialCommunityIcons style={styles.icons} name="lightning-bolt" size={50} color="black" />
                <Text style={styles.label}>12Vအပင်</Text>
                <TextInput 
                  style={styles.textInput} 
                  placeholder='12V' 
                  keyboardType='numeric'
                  // value={text}
                  onChangeText={setFithData}
                  maxLength={2}
                />
              </View>
              <Separator/>
              <View style={styles.textContainer}>
              <MaterialCommunityIcons style={styles.icons} name="lightning-bolt" size={50} color="black" />
                <Text style={styles.label}>ACအဝင်</Text>
                <TextInput 
                  style={styles.textInput} 
                  placeholder='250V' 
                  keyboardType='numeric'
                  // value={text}
                  onChangeText={setSixData}
                  maxLength={3}
                  onChange={handleChange}
                />
              </View>
              {/* <View>
              <Text>My name is{text}</Text>
              </View> */}
              <Separator/>
              <View style={styles.btnContainer}>
                <Pressable 
                  onPress={toggleLoading} 
                  disabled={!text}
                  style={{backgroundColor: !text ? "grey" : "black", padding: 20, borderRadius: 30}}
                  onPressOut={() => { navigation.navigate('Result',{
                      res_fw : firstw_data,
                      res_fh: firsth_data,
                      res_s: second_data,
                      res_t: third_data,
                      res_f: fourth_data,
                      res_fi: fith_data,
                      res_six: six_data,
                  });
                }} 
                >
                  {isLoading && <ActivityIndicator size="large" color="green"/>}
                  <Text style={{ color: "green"}}>Calculate</Text>
                </Pressable>
              </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 30,
    backgroundColor: "grey",
    padding: 20,
  },
  textInput: {
      height: 40,
      width: 50,
      padding: 8,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 10,
      margin: 20,
      marginHorizontal: 150,
      shadowColor: "black",
      // elevation: 30,
  },
  textInputw: {
      height: 40,
      width: 50,
      padding: 8,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 10,
      margin: 20,
      shadowColor: "black",
      elevation: 30,
  },
  textInputh: {
      height: 40,
      width: 50,
      padding: 8,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 10,
      margin: 20,
      shadowColor: "black",
      elevation: 30,
  },
  label: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
  },
  textContainer: {
  // justifyContent: "space-around"

  },
  icons: {
    paddingLeft: 30,
  },
  whinput: {
      flexDirection: "row",
      justifyContent: "space-around",
  },
  btnContainer: {
    alignSelf: "center",
    margin: 30,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  colors: {
    backgroundColor: "white",
    color: "white"
  }
});