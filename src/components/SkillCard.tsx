import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.skillText}>{skill}</Text>

      <Text style={styles.removerText}>Press to remove</Text>
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
  },
  removerText: {
    color: '#FFF',
    fontSize: 12,
  },
});
