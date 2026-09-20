/* ============================================================
   CONFIGURAÇÃO DA EMPRESA — é o ÚNICO arquivo que muda de uma
   empresa para outra. Publique junto com o index.html.
   ============================================================ */
window.APP_CONFIG = {
  // Nome mostrado no topo enquanto não for preenchido "Nome da empresa" em Ajustes
  empresaNome: 'Pedidos Cleber',
  // Frase ao lado do nome, no topo
  tagline: 'Orçamentos e Pedidos',
  // Fornecedores que já vêm cadastrados (depois se edita em Ajustes)
  fornecedoresPadrao: ['Geral'],
  // Prefixo interno (evita misturar dados salvos no navegador entre empresas)
  storagePrefix: 'pedidos_cleber',

  // Dados do projeto Firebase "Pedidos fabrica Cleber"
  firebase: {
    apiKey: 'AIzaSyClJ1O4KyT8maXMAAwb8AzdIp4amKHKVvM',
    authDomain: 'pedidos-fabrica-cleber.firebaseapp.com',
    projectId: 'pedidos-fabrica-cleber',
    storageBucket: 'pedidos-fabrica-cleber.firebasestorage.app',
    messagingSenderId: '590104170119',
    appId: '1:590104170119:web:3dda799890908685c3f222'
  }
};
