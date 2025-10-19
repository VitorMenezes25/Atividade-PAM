import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from '../styles/styles.js';

export default function TaskItem({
  tarefa,
  onConcluir,
  onEditar,
  onExcluir,
  obterAnimacao,
  animarSaida
}) {
  const animacao = obterAnimacao(tarefa.id);

  const handleExcluir = () => {
    // anima e, ao final, executa exclusão
    animarSaida(tarefa.id, () => onExcluir(tarefa.id));
  };

  return (
    <Animated.View
      style={[
        styles.itemTarefa,
        {
          opacity: animacao,
          transform: [
            {
              translateY: animacao.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.conteudoTarefa}
        onPress={() => onConcluir(tarefa.id)}
      >
        <View style={[styles.checkbox, tarefa.concluida && styles.checkboxConcluida]}>
          {tarefa.concluida && <Text style={styles.checkmark}>✓</Text>}
        </View>

        <View style={styles.textoContainer}>
          <Text style={[styles.textoTarefa, tarefa.concluida && styles.textoConcluido]}>
            {tarefa.texto}
          </Text>
          <Text style={styles.dataTarefa}>{tarefa.data}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.botoesAcao}>
        <TouchableOpacity
          style={[styles.botaoAcao, styles.botaoEditar]}
          onPress={() => onEditar(tarefa.id, tarefa.texto)}
        >
          <Text style={styles.textoBotaoAcao}>✏️</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoAcao, styles.botaoExcluir]}
          onPress={handleExcluir}
        >
          <Text style={styles.textoBotaoAcao}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
