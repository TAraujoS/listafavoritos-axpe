// Script para ativar simulação do Lighthouse
// Cole este código no console do navegador (F12)

console.log('🎯 [LCP DEBUG] Ativando simulação do Lighthouse...');

localStorage.setItem('lighthouse-simulation', 'true');
console.log('✅ [LCP DEBUG] Simulação ativada no localStorage');

console.log('🔄 [LCP DEBUG] Recarregando página...');
window.location.reload(); 