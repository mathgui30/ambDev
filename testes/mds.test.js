const mdc = require('../funçoes/mdc');

test('O mdc dos dois números deve estar certo', () => {
    expect(mdc(6,4)).toMatchObject(2);
})
test('O mdc dos dois números deve ser registrado', () => {
    expect(mdc(12,6)).toMatchObject(6);
})