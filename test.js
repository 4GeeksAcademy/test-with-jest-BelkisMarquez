const {sum} = require('./app.js');
test('add 14 + 9 to equal 23',()=>{
    let total= sum(14,9);
    expect(total).toBe(23)
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})
test("One euro should be 156,5 japan yens", function() {
    const {fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(3.5);
    const expected = 0.3057 * 156.5;
    expect(fromDollarToYen(3.5)).toBe(47.84428571428572);
})
test("One euro should be 156,5 japan yens and 0.87 pounds", function() {
    const {fromYenToPound  } = require('./app.js');
    const pounds = fromYenToPound (50);
    const expected = 50 * 0.87;
    expect(fromYenToPound (50)).toBe(2.7231);
})
