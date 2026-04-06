const fs = require('fs');
let f = 'src/data/chemistry/atomic_stucture_bonding.ts';
let content = fs.readFileSync(f, 'utf8');

if (!content.includes('ATOMIC_STRUCTURE_BONDING_QUESTIONS')) {
    content = "import { Question } from '../../types';\n\nexport const ATOMIC_STRUCTURE_BONDING_QUESTIONS: Question[] = [\n" + content.replace(/^\s*\/\/\s*Topic.*/, '');
}

content = content.replace(/(\n\s*(id|section|instruction|text|answer|explanation)\s*:\s*(?:\d+|\".*?\"|'.*?'))(?=\n)/g, '$1,');
content = content.replace(/(\n\s*options\s*:\s*\[.*?\])(?=\n)/g, '$1,');

// Fix missing comma between array elements
content = content.replace(/\}\n\{/g, '},\n{');

fs.writeFileSync(f, content);
console.log('Fixed file');
