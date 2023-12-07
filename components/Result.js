import { StyleSheet, Text, SafeAreaView, ScrollView, View, FlatList, Pressable, Linking, TouchableOpacity, Alert} from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

export default function Result ({route}) {

const { res_fw, res_fh, res_s, res_t, res_f, res_fi, res_six } = route.params;
// const { res_t, res_six } = route.params;

let oneInchCoil = res_s / (res_fw * res_fh);

// const GetTwoDecimal = (oneInchCoil) => {
//     Number.parseFloat(oneInchCoil).toFixed(2);
// }

const alert = () => {
    Alert.alert('အကြံပြုချက်',"အပင်အရည်တွက်များလျှင် Scroll UP/DOWN ဆွဲပါ");
};

setTimeout(() => {
    alert();
}, 5000);

const openLink = () => {
    Linking.openURL('https://guinfinityfnd.github.io/myportfolio/');
};

const items = [];

    let originalValue = res_six; 
    let percentage = res_t;

    for (let i = 0; i < res_f; i++) {
        const firstPer = (percentage / 100);
        const per = (originalValue* firstPer);
        // Volts.push({"key" : Math.round(per)});
        // const newPer = Math.round(per);
        const substract = originalValue - per; 
        let updating = substract * firstPer;
        const resultdata = substract - updating;
        //// This line is updated to originalValue variable with new data /////////
        originalValue = substract
        // This under lines are showing about "i needed data as array to show in FlatList so 
        // I created an Array[items] and push data as object("key":"value") "
        items.push({"key" : Math.round(originalValue), "volts" : Math.round(per), "coil": Math.round(per * oneInchCoil)});
    // console.log(items);
    // console.log('*********');
} 
const last = items[items.length - 1];
const lastNum = Math.round(last.key * oneInchCoil);
        // console.log(lastNum);

return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.parentContainer}>
                <Text style={styles.label}>Former Size</Text>
                <Text style={styles.res_label}>{res_fw * res_fh} inches</Text>
            </View>
            <View style={styles.parentContainer}>
                <Text style={styles.label}>Turns</Text>
                <Text style={styles.res_label}>{res_s}</Text>
            </View>
            <View style={styles.parentContainer}>
                <Text style={styles.label}>Percentage</Text>
                <Text style={styles.res_label}>{res_t}%</Text>
            </View>
            <View style={styles.parentContainer}>
                <Text style={styles.label}>Counts</Text>
                <Text style={styles.res_label}>{res_f}</Text>
            </View>
            <View style={styles.parentContainer}> 
                <Text style={styles.label}>Y-string</Text>
                <Text style={styles.res_label}>{res_fi}</Text>
            </View>
            <View style={styles.parentContainer}> 
                <Text style={styles.label}>One Inch Coil</Text>
                <Text style={styles.res_label}>{oneInchCoil}</Text>
            </View>
            <View style={styles.parentContainer}> 
                <Text style={styles.label}>Ac-In</Text>
                <Text style={styles.res_label}>{res_six}V</Text>
            </View>
        </ScrollView>
        <View style={styles.mainResults}>
            <Text style={styles.result}>ဗို့စ်အား
                <MaterialCommunityIcons name="lightning-bolt" size={20} color="red" />
            </Text>
            <Text style={styles.result}>ခြားနားဗို့စ်
                <MaterialCommunityIcons name="lightning-bolt" size={20} color="red" />
            </Text>
            <Text style={styles.result}>ကွိုင်အပတ်ရေ
                <MaterialCommunityIcons name="rotate-orbit" size={20} color="red" />
            </Text>
        </View>
        <View style={styles.mainResultsText}>
            <Text style={styles.CoilWindingData}>{lastNum}</Text>
        </View>
        <FlatList
            style={styles.flatContainer}
            ////// This line is showed array data in Reverse order //////
            data={items.reverse()}
            renderItem={({item,index}) => {
                return (
                    <>
                    <View style={styles.card}>
                        <Text key={index} style={styles.data}>{item.key}</Text>
                        <Text key={item} style={styles.data}>{item.volts}</Text>
                        <Text key={item.key} style={styles.CoilWindingData}>
                            {item.coil}
                        </Text>
                    </View>
                    </>
                )
            }}
            ListEmptyComponent={<View><Text style={styles.warn}>Cannot get Data</Text></View>}
            ListFooterComponent={
                <View style={styles.visitLinkContainer}>
                    <Text style={styles.visitLink}>Click Here - </Text>
                    <TouchableOpacity onPress={openLink}>
                        <Text style={styles.appericate}>
                            Developer Account 
                        </Text>
                    </TouchableOpacity>
                </View>
            }
        />
         </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
    },
    mainResults: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    result: {
        fontSize: 20,
        color: "#fff",
    },
    mainResultsText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 60,
        marginTop: 20,
    },
    scrollContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        columnGapgap: 2,
        marginTop: 10,
        marginBottom: 20,
    },  
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',     
        textAlign: 'center',
    },
    parentContainer: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#fff",
    },
    res_label: {
        fontSize: 20,
        color: "#6a51ae",
        textAlign: 'center',
        padding: 5
    },
    flatContainer: {
        marginTop: 20,
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        // borderWidth: 2,
        // borderColor: "white",
    },
    data: {
        // padding: 5,
        // paddingVertical: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
    },
    CoilWindingData: {
        color: "#0000ff",
        fontSize: 30,
        fontWeight: 'bold',
    },
    warn: {
        textAlign: 'center',
        fontSize: 40,
        color: '#ff0000',
    },
    appericate: {
        color: "lightgreen",
        textAlign: 'center',
        fontSize: 20,
    },
    visitLinkContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        marginVertical: 10,
    },
    visitLink: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});