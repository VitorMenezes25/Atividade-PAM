import { StyleSheet } from 'react-native';
import { CORES } from '../utils/constants.js';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: CORES.textoPrincipal,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: CORES.textoSecundario,
    textAlign: 'center',
    marginTop: 5,
  },
  formulario: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: CORES.branco,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  botaoAdicionar: {
    backgroundColor: CORES.sucesso,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotaoAdicionar: {
    color: CORES.branco,
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    backgroundColor: '#dfe6e9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotaoLimpar: {
    color: CORES.textoSecundario,
    fontSize: 14,
  },
  lista: {
    flex: 1,
  },
  conteudoLista: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemTarefa: {
    backgroundColor: CORES.branco,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  conteudoTarefa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxConcluida: {
    backgroundColor: CORES.sucesso,
    borderColor: CORES.sucesso,
  },
  checkmark: {
    color: CORES.branco,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoContainer: {
    flex: 1,
  },
  textoTarefa: {
    fontSize: 16,
    color: CORES.textoPrincipal,
  },
  textoConcluido: {
    textDecorationLine: 'line-through',
    color: CORES.textoSecundario,
  },
  dataTarefa: {
    fontSize: 12,
    color: CORES.data,
    marginTop: 2,
  },
  botoesAcao: {
    flexDirection: 'row',
  },
  botaoAcao: {
    padding: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  botaoEditar: {
    backgroundColor: '#74b9ff',
  },
  botaoExcluir: {
    backgroundColor: '#ff7675',
  },
  textoBotaoAcao: {
    fontSize: 16,
  },
  listaVazia: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  textoListaVazia: {
    textAlign: 'center',
    color: CORES.textoSecundario,
    fontSize: 16,
    lineHeight: 24,
  },
});
