import { useState } from 'react';
import { Alert } from 'react-native';

export default function useTasks() {
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  const adicionarTarefa = () => {
    if (textoTarefa.trim() === '') {
      Alert.alert('Ops!', 'Digite uma tarefa');
      return null;
    }

    if (editandoId) {
      setTarefas(prev =>
        prev.map(t =>
          t.id === editandoId ? { ...t, texto: textoTarefa } : t
        )
      );
      setEditandoId(null);
      setTextoTarefa('');
      return null;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      texto: textoTarefa,
      concluida: false,
      data: new Date().toLocaleTimeString(),
    };

    setTarefas(prev => [novaTarefa, ...prev]);
    setTextoTarefa('');
    return novaTarefa.id;
  };

  const concluirTarefa = (id) => {
    setTarefas(prev =>
      prev.map(t => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const iniciarEdicao = (id, texto) => {
    setEditandoId(id);
    setTextoTarefa(texto);
  };

  const excluirTarefa = (id) => {
    setTarefas(prev => prev.filter(t => t.id !== id));
  };

  const limparConcluidas = () => {
    const concluidas = tarefas.filter(t => t.concluida);
    setTarefas(prev => prev.filter(t => !t.concluida));
  };

  return {
    tarefas,
    textoTarefa,
    setTextoTarefa,
    editandoId,
    adicionarTarefa,
    concluirTarefa,
    iniciarEdicao,
    excluirTarefa,
    limparConcluidas,
  };
}
