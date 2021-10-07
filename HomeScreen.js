import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component{

constructor(props){
super(props)
}
render(){
return(
<View style={styles.container} > 
<ImageBackground source={require('../assets/awesoem.png')} style = {styles.backgroundImage} >
<Text style = {styles.titletext}> Book Donation App </Text> 

<TouchableOpacity style = {styles.routeCard} onPress={()=>{this.props.navigation.navigate('BDs')}} >
<Text style = {styles.routeText}>Book Donation</Text>  </TouchableOpacity>

<TouchableOpacity style = {styles.routeCard} onPress={()=>{this.props.navigation.navigate('BRs')}} >
<Text style = {styles.routeText}>Book Request</Text>  </TouchableOpacity>
     
</ImageBackground>  </View>
)
}

}


const styles = StyleSheet.create({
container:{flex:1},
backgroundImage:{flex:1,
 resizeMode: 'cover'},

 titletext: {fontSize: 34,
             fontWeight: 'bold',
             color: 'white',
             
 },

  routeCard: {
        flex: .10,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 70,
        borderRadius: 30,
        backgroundColor: 'gold'
    },
     routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 9,
        paddingLeft: 47
    },
})