import { useRef } from 'react';
import { Animated } from 'react-native';

export default function useAnimations() {
  const animacoes = useRef(new Map()).current;

  const obterAnimacao = (id) => {
    if (!animacoes.has(id)) {
      animacoes.set(id, new Animated.Value(1));
    }
    return animacoes.get(id);
  };

  const animarEntrada = (id) => {
    if (!animacoes.has(id)) {
      animacoes.set(id, new Animated.Value(0));
    } else {
      animacoes.get(id).setValue(0);
    }
    const anim = animacoes.get(id);
    Animated.timing(anim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const animarSaida = (id, callback) => {
    if (!animacoes.has(id)) {
      animacoes.set(id, new Animated.Value(1));
    }
    const anim = animacoes.get(id);
    Animated.timing(anim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (callback) callback();
      animacoes.delete(id);
    });
  };

  return { obterAnimacao, animarEntrada, animarSaida };
}
