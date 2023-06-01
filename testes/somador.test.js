const somador = require('../funçoes/somador');

test('A soma deve estar certa', () => {
    expect(somador(2,4)).toMatchObject(6);
});
test('O contador deve registrar a quantidade de números a ser somados', () => {
    expect(somador(3).toMatchObject(3));
});