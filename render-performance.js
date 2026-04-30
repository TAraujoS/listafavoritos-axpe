// Script para monitorar performance de renderização
// Cole este código no console do navegador (F12)

console.log('🔧 [PERFORMANCE DEBUG] ===== MONITOR DE RENDERIZAÇÃO =====');

// Função para medir tempo de renderização
function measureRenderTime() {
  console.log('🔍 [PERFORMANCE DEBUG] Medindo tempo de renderização...');
  
  const startTime = performance.now();
  
  // Aguardar próxima frame para medir renderização
  requestAnimationFrame(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    console.log(`⏱️ [PERFORMANCE DEBUG] Tempo de renderização: ${renderTime.toFixed(2)}ms`);
    
    if (renderTime > 100) {
      console.log('⚠️ [PERFORMANCE DEBUG] Tempo de renderização alto detectado!');
    } else {
      console.log('✅ [PERFORMANCE DEBUG] Tempo de renderização aceitável');
    }
  });
}

// Função para verificar elementos críticos
function checkCriticalElements() {
  console.log('🔍 [PERFORMANCE DEBUG] Verificando elementos críticos...');
  
  // Verificar hero
  const hero = document.querySelector('.hero-image');
  const heroText = document.querySelector('.hero-info h2');
  const heroParagraph = document.querySelector('.hero-info p');
  
  console.log('🏠 Hero image encontrado:', !!hero);
  console.log('📝 Hero title encontrado:', !!heroText);
  console.log('📄 Hero paragraph encontrado:', !!heroParagraph);
  
  // Verificar se elementos estão visíveis
  if (hero) {
    const rect = hero.getBoundingClientRect();
    console.log('👁️ Hero visível:', rect.width > 0 && rect.height > 0);
  }
  
  if (heroText) {
    const rect = heroText.getBoundingClientRect();
    console.log('👁️ Hero text visível:', rect.width > 0 && rect.height > 0);
  }
  
  if (heroParagraph) {
    const rect = heroParagraph.getBoundingClientRect();
    console.log('👁️ Hero paragraph visível:', rect.width > 0 && rect.height > 0);
  }
}

// Função para verificar recursos carregados
function checkLoadedResources() {
  console.log('🔍 [PERFORMANCE DEBUG] Verificando recursos carregados...');
  
  // Verificar imagens
  const images = document.querySelectorAll('img');
  const loadedImages = Array.from(images).filter(img => img.complete);
  
  console.log(`🖼️ Imagens carregadas: ${loadedImages.length}/${images.length}`);
  
  // Verificar scripts
  const scripts = document.querySelectorAll('script[src]');
  console.log(`📜 Scripts externos: ${scripts.length}`);
  
  // Verificar CSS
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  console.log(`🎨 Stylesheets: ${stylesheets.length}`);
}

// Função para verificar performance de rede
function checkNetworkPerformance() {
  console.log('🔍 [PERFORMANCE DEBUG] Verificando performance de rede...');
  
  if ('performance' in window && 'getEntriesByType' in performance) {
    const navigationEntries = performance.getEntriesByType('navigation');
    const resourceEntries = performance.getEntriesByType('resource');
    
    if (navigationEntries.length > 0) {
      const nav = navigationEntries[0];
      console.log('🌐 Tempo de carregamento da página:', nav.loadEventEnd - nav.loadEventStart, 'ms');
      console.log('⚡ Tempo de resposta do servidor:', nav.responseEnd - nav.requestStart, 'ms');
      console.log('🎨 Tempo de renderização DOM:', nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart, 'ms');
    }
    
    // Verificar recursos lentos
    const slowResources = resourceEntries.filter(resource => 
      resource.duration > 1000
    );
    
    if (slowResources.length > 0) {
      console.log('🐌 Recursos lentos encontrados:');
      slowResources.forEach(resource => {
        console.log(`   - ${resource.name}: ${resource.duration.toFixed(2)}ms`);
      });
    } else {
      console.log('✅ Todos os recursos carregados rapidamente');
    }
  }
}

// Função para verificar LCP
function checkLCP() {
  console.log('🔍 [PERFORMANCE DEBUG] Verificando LCP...');
  
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('🎯 LCP detectado:', entry.element?.tagName, entry.startTime, 'ms');
          console.log('📏 Tamanho do elemento LCP:', entry.size);
        });
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Verificar LCP após 3 segundos
      setTimeout(() => {
        observer.disconnect();
        console.log('✅ Monitoramento LCP concluído');
      }, 3000);
    } catch (error) {
      console.log('❌ Erro ao monitorar LCP:', error);
    }
  }
}

// Função para otimizações sugeridas
function suggestOptimizations() {
  console.log('💡 [PERFORMANCE DEBUG] Sugestões de otimização:');
  
  // Verificar lazy loading
  const images = document.querySelectorAll('img');
  const lazyImages = Array.from(images).filter(img => img.loading === 'lazy');
  console.log(`🖼️ Imagens com lazy loading: ${lazyImages.length}/${images.length}`);
  
  // Verificar preload
  const preloads = document.querySelectorAll('link[rel="preload"]');
  console.log(`⚡ Preloads configurados: ${preloads.length}`);
  
  // Verificar fontes
  const fonts = document.querySelectorAll('link[rel="preload"][as="font"]');
  console.log(`🔤 Fontes pré-carregadas: ${fonts.length}`);
  
  // Sugestões
  if (lazyImages.length < images.length * 0.5) {
    console.log('💡 Sugestão: Adicionar lazy loading em mais imagens');
  }
  
  if (preloads.length < 3) {
    console.log('💡 Sugestão: Adicionar mais preloads para recursos críticos');
  }
  
  if (fonts.length === 0) {
    console.log('💡 Sugestão: Pré-carregar fontes críticas');
  }
}

// Expor funções globalmente
window.renderPerformance = {
  measure: measureRenderTime,
  checkElements: checkCriticalElements,
  checkResources: checkLoadedResources,
  checkNetwork: checkNetworkPerformance,
  checkLCP: checkLCP,
  suggest: suggestOptimizations
};

// Executar verificações iniciais
setTimeout(() => {
  checkCriticalElements();
  checkLoadedResources();
  checkNetworkPerformance();
  suggestOptimizations();
}, 1000);

console.log('💡 [PERFORMANCE DEBUG] Use:');
console.log('   renderPerformance.measure() - medir tempo de renderização');
console.log('   renderPerformance.checkElements() - verificar elementos críticos');
console.log('   renderPerformance.checkResources() - verificar recursos');
console.log('   renderPerformance.checkNetwork() - verificar performance de rede');
console.log('   renderPerformance.checkLCP() - monitorar LCP');
console.log('   renderPerformance.suggest() - sugestões de otimização'); 