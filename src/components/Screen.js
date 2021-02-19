import React from "react";
import {View, StyleSheet, Text, } from 'react-native';
import Constants from 'expo-constants';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import Square from "./Square";

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
            <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
    </div>
  )
}



function Screen() {
  

  return (
    <View style={styles.container}>
      <Square color="#EBEAF9" title="Allergies" />
      <Square color="#EBEAF9" title="Régimes" />
      <Square color="#EBEAF9" title="Carences Alimentaires" />
      <Square color="#EBEAF9" title="Régime stricte" />
      <Square color="#EBEAF9" title="Aucune préférences alimentaires" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
  },
});

export default Screen;
