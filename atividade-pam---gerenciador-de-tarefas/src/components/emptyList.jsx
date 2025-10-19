import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function EmptyList() {
  return (
    <View style={styles.listaVazia}>
      <Text style={styles.textoListaVazia}>
        Nenhuma tarefa ainda!{'\n'}Adicione sua primeira tarefa acima 👆
      </Text>
    </View>
  );
}
