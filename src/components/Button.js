import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
