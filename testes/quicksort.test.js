const quicksort = require('../funçoes/quicksort');

test('A ordem deve estar certa', () => {
    expect(quicksort([5,2,9,6,7])).toMatchObject([2,5,6,7,9]);
})
test('A ordem deve estar certa', () => {
    expect(quicksort([5,2,9,6,7])).toMatchObject([2,5,6,7,9]);
})