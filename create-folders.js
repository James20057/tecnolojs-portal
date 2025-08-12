// create-folders.js
const fs = require('fs');
const path = require('path');

const folders = [
  'src/assets/images',
  'src/assets/fonts', 
  'src/assets/icons',
  'src/styles/base',
  'src/styles/components',
  'src/styles/layouts',
  'src/styles/pages',
  'src/styles/themes',
  'src/styles/utils',
  'src/js/components',
  'src/js/utils',
  'src/js/services',
  'src/js/config',
  'src/pages',
  'src/components',
  'public',
  'tests/unit',
  'tests/integration',
  'tests/e2e',
  'docs',
  'config',
  'scripts'
];

folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
  console.log(`✅ Creada: ${folder}`);
});

console.log('🎉 ¡Todas las carpetas creadas exitosamente!');