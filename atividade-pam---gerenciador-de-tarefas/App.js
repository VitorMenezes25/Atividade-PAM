import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Header from './src/components/header.jsx';
import TaskForm from './src/components/taskForm.jsx';
import TaskList from './src/components/taskList.jsx';
import useTasks from './src/hooks/useTasks.js';
import useAnimations from './src/hooks/useAnimations.js';
import styles from './src/styles/styles.js';

export default function App() {
  const {
    tarefas,
    textoTarefa,
    setTextoTarefa,
    editandoId,
    adicionarTarefa,
    concluirTarefa,
    iniciarEdicao,
    excluirTarefa,
    limparConcluidas,
  } = useTasks();

  const { obterAnimacao, animarEntrada, animarSaida } = useAnimations();

  const handleAdicionar = async () => {
    const novoId = adicionarTarefa();
    if (novoId) {
      setTimeout(() => animarEntrada(novoId), 100);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header
        titulo="📝 Lista de Tarefas"
        pendentes={tarefas.filter(t => !t.concluida).length}
      />

      <TaskForm
        textoTarefa={textoTarefa}
        setTextoTarefa={setTextoTarefa}
        onSubmit={handleAdicionar}
        editandoId={editandoId}
        mostrarBotaoLimpar={tarefas.some(t => t.concluida)}
        onLimpar={limparConcluidas}
      />

      <TaskList
        tarefas={tarefas}
        obterAnimacao={obterAnimacao}
        animarSaida={animarSaida}
        onConcluir={concluirTarefa}
        onEditar={iniciarEdicao}
        onExcluir={excluirTarefa}
      />
    </KeyboardAvoidingView>
  );
}
