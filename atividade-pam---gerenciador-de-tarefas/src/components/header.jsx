import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles.js';

export default function Header({ titulo, pendentes }) {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.subtitulo}>{pendentes} pendentes</Text>
    </View>
  );
}
