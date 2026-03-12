const categorias = [
"Terror",
"Comédia",
"Ação",
"Romance"
];

categorias.sort();

for(let i = 0; i < categorias.length; i++){
console.log(`[CAT-${i+1}] -> Categoria: ${categorias[i]} | Status: Ativa`);
}
