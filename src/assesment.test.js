const assesment = require("./assesment");

test('Debe retornar un número', () => {
  const response = assesment([ 2, 1 ]);
  expect(typeof response).toBe('number')
});

test('Suma un punto por cada número par en el array', () => {
  const response = assesment([ 2 ]);
  expect(response).toEqual(1);
});

test('Suma 3 puntos por cada número impar en el array excepto el "5"', () => {
  const response = assesment([ 3, 5 ]);
  expect(response).toEqual(8);
});

test('Suma 5 puntos por cada número "5" en el array', () => {
  const response = assesment([ 5, 5, 3, 2 ]);
  expect(response).toEqual(14);
})
