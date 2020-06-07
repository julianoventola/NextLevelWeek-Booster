import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const Points: React.FC = () => {
  return (
    <View style={styles.content}>
      <Text>Enrolar os cookies!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Points;
