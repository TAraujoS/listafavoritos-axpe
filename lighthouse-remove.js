// Script para restaurar o estado normal após os testes
// Cole este código no console do navegador (F12)

console.log('🔧 [LCP DEBUG] Restaurando estado normal...');

// Usar a função global se disponível
if (window.lighthouseTest && window.lighthouseTest.remove) {
  window.lighthouseTest.remove();
} else {
  // Fallback manual
  localStorage.removeItem('lighthouse-simulation');
  window.isLighthouse = false;
  
  console.log('✅ [LCP DEBUG] Simulação removida do localStorage');
  console.log('🔄 [LCP DEBUG] Recarregando página...');
  
  setTimeout(() => {
    window.location.reload();
  }, 1000);
} 