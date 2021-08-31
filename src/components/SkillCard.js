import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#FFF',
    backgroundColor: '#1f1e25',
    padding: 8,
    borderRadius: 10,

    alignItems: 'center',

    marginVertical: 4,
  },
  skillText: {
    color: '#FFF',
    padding: 8,
    fontSize: 22,
    // fontWeight: 'bold',
  },
});
