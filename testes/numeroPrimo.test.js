const numeroPrimo = require('../funçoes/numeroPrimo');

test('todos os numeros tem que ser primo', () => {
    expect(numeroPrimo(1 || 2 || 3 || 5 || 7 || 11 || 13 || 17)).toMatchObject(["Eh primo"]);
})
test('todos os numeros não podem ser primo', () => {
    expect(numeroPrimo( 4 || 6 || 8 || 10 || 12 || 14 || 16 || 18)).toMatchObject(["Nao eh primo"]);
})