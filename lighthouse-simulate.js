// Script para simular o Lighthouse localmente
// Cole este código no console do navegador (F12)

console.log('🔧 [LCP DEBUG] Simulando Lighthouse...');

// Definir flag de simulação no localStorage
localStorage.setItem('lighthouse-simulation', 'true');

// Definir a variável global isLighthouse como true
window.isLighthouse = true;

console.log('✅ [LCP DEBUG] Lighthouse simulado com sucesso!');
console.log('🔄 [LCP DEBUG] Recarregando página...');

// Recarregar a página para aplicar as mudanças
setTimeout(() => {
  window.location.reload();
}, 1000); 