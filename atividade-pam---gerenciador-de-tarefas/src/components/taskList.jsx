import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './taskItem.jsx';
import EmptyList from './emptyList.jsx';
import styles from '../styles/styles.js';

export default function TaskList({
  tarefas,
  obterAnimacao,
  animarSaida,
  onConcluir,
  onEditar,
  onExcluir
}) {
  const renderizarTarefa = ({ item }) => (
    <TaskItem
      tarefa={item}
      obterAnimacao={obterAnimacao}
      animarSaida={animarSaida}
      onConcluir={onConcluir}
      onEditar={onEditar}
      onExcluir={onExcluir}
    />
  );

  return (
    <FlatList
      data={tarefas}
      keyExtractor={(item) => item.id}
      renderItem={renderizarTarefa}
      style={styles.lista}
      contentContainerStyle={styles.conteudoLista}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList />}
    />
  );
}
