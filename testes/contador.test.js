const contador = require('../funçoes/contador');

test('O contador deve acertar o número de inteiros', () => {
    expect(contador([0,1,2,3,4,5])).toMatchObject(6);
});
test('O contador deve contar os valores', () => {
    expect(contador([24,56,72.31,54])).toMatchObject(5);
});