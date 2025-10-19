import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles.js';

export default function TaskForm({
  textoTarefa,
  setTextoTarefa,
  onSubmit,
  editandoId,
  mostrarBotaoLimpar,
  onLimpar
}) {
  return (
    <View style={styles.formulario}>
      <TextInput
        style={styles.input}
        placeholder="Digite uma nova tarefa..."
        value={textoTarefa}
        onChangeText={setTextoTarefa}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
      />

      <TouchableOpacity style={styles.botaoAdicionar} onPress={onSubmit}>
        <Text style={styles.textoBotaoAdicionar}>
          {editandoId ? 'Atualizar' : 'Adicionar'}
        </Text>
      </TouchableOpacity>

      {mostrarBotaoLimpar && (
        <TouchableOpacity style={styles.botaoLimpar} onPress={onLimpar}>
          <Text style={styles.textoBotaoLimpar}>Limpar Concluídas</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
