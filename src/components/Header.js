import React from 'react';
import { Text, View } from 'react-native';

<Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}            z
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
     
       return (
           
           <View style={viewStyle}>
               <Text style={textStyle}>{props.headerText}</Text>
           </View>
       );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center' ,
        alignItems: 'center' ,
        height: 70,
        paddingTop: 30,
        shadowColor:'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;