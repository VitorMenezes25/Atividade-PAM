# Gestão de Tarefas — Refatoração

## Visão Geral

O objetivo desta refatoração foi transformar um único arquivo monolítico (`Codigo.jsx`) em uma estrutura **modular** e **organizada**, facilitando **manutenção**, **legibilidade**, **reuso** e **testabilidade**. A lógica (estado e comportamento), a apresentação (componentes) e os estilos foram separados em responsabilidades claras.

A estrutura e as escolhas foram pensadas para que o projeto possa ser executado diretamente no **Expo Snack** (criando os arquivos/pastas no editor do Snack) sem dependências nativas adicionais.

---

## Arquivos Principais Implementados

### Componentes (UI)

* **Header.jsx** — cabeçalho com título e contador de tarefas pendentes.
* **TaskForm.jsx** — formulário para adicionar/editar tarefas (controle do `TextInput`, botões de ação).
* **TaskItem.jsx** — item individual da lista (texto, checkbox, data, botões editar/excluir e animações).
* **TaskList.jsx** — componente que encapsula `FlatList` e usa `TaskItem` para renderização.
* **EmptyList.jsx** — renderiza a interface quando não há tarefas.

### Hooks (Lógica)

* **useTasks.js** — hook customizado responsável pelo gerenciamento do estado das tarefas (CRUD), controle de texto do formulário e fluxo de edição.
* **useAnimations.js** — hook que encapsula a lógica de animações por item (entradas/saídas) utilizando `Animated` e `useRef`.

### Estilos e Constantes

* **styles/styles.js** — centraliza todos os estilos usando `StyleSheet.create` para performance e consistência.
* **utils/constants.js** — centraliza paleta de cores, textos e constantes reutilizáveis.

---

---

## Mapeamento de Responsabilidades (por arquivo)

| Arquivo | Responsabilidade |
| :--- | :--- |
| **Header.jsx** | Exibe o título da aplicação e um contador com o número de tarefas pendentes. Mantém a lógica de apresentação isolada do restante da aplicação. |
| **TaskForm.jsx** | Controla o estado do campo de entrada (via props do `useTasks`) e trata submit (adicionar/atualizar). Valida entrada (ex.: não permite tarefa vazia) e aciona callbacks passados por props. |
| **TaskItem.jsx** | Renderiza cada tarefa (texto, data, estado concluída). Fornece ações: marcar concluída, iniciar edição, excluir. Integra animações de entrada/saída obtidas via `useAnimations` (opacidade/translate). |
| **TaskList.jsx** | Encapsula `FlatList` e decide entre lista vazia (`EmptyList`) ou renderização de itens. Recebe callbacks para ações (concluir, editar, excluir) vindos do hook. |
| **EmptyList.jsx** | Componente simples de feedback visual quando não há tarefas. |
| **useTasks.js** | Responsável por toda a **lógica de negócio** das tarefas (estado: lista, texto do input, id em edição; operações: adicionarTarefa, concluirTarefa, etc.). Projeta uma **API simples** para os componentes consumirem, facilitando testes unitários. |
| **useAnimations.js** | Gerencia um `Map` de valores de animação por id (mantidos em `useRef`) para: `obterAnimacao(id)`, `animarEntrada(id)`, `animarSaida(id, callback)`. Encapsular essa lógica evita duplicação no componente de item e torna o comportamento previsível. |

---

## Conceitos Aplicados e Por Que São Vantajosos

### 1. Separação de Responsabilidades (SRP)

Cada arquivo tem uma responsabilidade única — apresentação, lógica ou estilo. Isso facilita entender e modificar partes específicas do projeto sem quebrar outras.

### 2. Composição e Reuso

Componentes pequenos e focados (`TaskItem`, `TaskForm`, `Header`) podem ser reutilizados ou substituídos sem impacto no restante do app. A composição facilita testes e evolução da UI.

### 3. Hooks Customizados para Lógica

Ao extrair a lógica para `useTasks` e `useAnimations`:
* a UI fica limpa e declarativa;
* a lógica torna-se **testável** (unit tests no hook sem necessidade de renderizar a UI);
* foca-se na **API do hook** (contrato), permitindo trocar a implementação interna sem alterar consumidores.

### 4. Centralização de Estilos e Constantes

Manter `styles.js` e `constants.js` melhora **consistência visual**, facilita ajustes globais (tema, cores) e melhora performance com `StyleSheet.create`.

### 5. Encapsulamento das Animações

Separar animações em `useAnimations` reduz acoplamento e permite aplicar a mesma estratégia de animação a diferentes listas/itens de forma consistente.

### 6. Testabilidade e Manutenção

* Hooks separados são fáceis de testar isoladamente (simular adição/remoção/edição).
* Pequenos componentes tornam o layout e a lógica de interação mais previsíveis e fáceis de debugar.

### 7. Compatibilidade com Expo Snack

A estrutura modular e o uso apenas de APIs compatíveis com Expo (React Native core, `Animated`, `FlatList`, `StyleSheet`) tornam o projeto executável diretamente no Expo Snack — facilitando demonstração, compartilhamento e avaliação.
