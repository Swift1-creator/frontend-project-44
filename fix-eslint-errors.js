const fs = require('fs');
const path = require('path');
const directory = './'; // укажите путь к папке с файлами, если нужно
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Удаление лишних точек с запятой
  content = content.replace(/;(?=\s*[\n\r])/g, '');
  // Удаление скобок вокруг одного аргумента стрелочной функции
  content = content.replace(/\(\s*([a-zA-Z0-9_$]+)\s*\)\s*=>/g, '$1 =>');
  // Перемещение закрывающей скобки на отдельную строку, если она на той же строке, что и блок
  content = content.replace(/(\}\)\s*)([^\n]*\n)/g, '$1\n$2');
  fs.writeFileSync(filePath, content, 'utf8');
}
function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.mjs')) {
      fixFile(fullPath);
      console.log(`Fixed: ${fullPath}\n`);
    }
  });
}
walkDir(directory);
