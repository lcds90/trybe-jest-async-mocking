const mf = require('../src/mockFunctions');

jest.mock('../src/mockFunctions');
/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mf.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui
  mf.add.mockImplementation((a, b) => a + b);
  mf.subtract.mockImplementation((a, b) => a - b);
  mf.multiply.mockImplementation((a, b) => a * b);
  mf.divide.mockImplementation((a, b) => a / b);
  mf.power.mockImplementation((a, b) => a ** b);
  mf.factorial.mockImplementation((n) => (n <= 1 ? 1 : mf.factorial(n - 1) * n));

  it('testa função add', () => {
    expect(mf.add(1, 2)).toEqual(3);
    expect(mf.add(8, 37)).toEqual(45);
    expect(mf.add(-11, 25)).toEqual(14);
    expect(mf.add(13, -188)).toEqual(-175);
    expect(mf.add(7, 26)).toEqual(33);
  });
  it('testa função subtract', () => {
    expect(mf.subtract(899, 35)).toEqual(864);
    expect(mf.subtract(-17, 333)).toEqual(-350);
    expect(mf.subtract(45, 97)).toEqual(-52);
    expect(mf.subtract(23, -108)).toEqual(131);
    expect(mf.subtract(-133, -29)).toEqual(-104);
  });
  it('testa função multiply', () => {
    expect(mf.multiply(1, 2)).toEqual(2);
    expect(mf.multiply(0, 5)).toEqual(0);
    expect(mf.multiply(-4, 9)).toEqual(-36);
    expect(mf.multiply(-12, -7)).toEqual(84);
    expect(mf.multiply(19, 23)).toEqual(437);
  });
  it('testa função divide', () => {
    expect(mf.divide(169, 13)).toEqual(13);
    expect(mf.divide(-1900, 5)).toEqual(-380);
    expect(mf.divide(42, 7)).toEqual(6);
    expect(mf.divide(729, 243)).toEqual(3);
    expect(mf.divide(1331, 11)).toEqual(121);
  });
  it('testa função power', () => {
    expect(mf.power(10, 2)).toEqual(100);
    expect(mf.power(2, 10)).toEqual(1024);
    expect(mf.power(5, 5)).toEqual(3125);
    expect(mf.power(1, 10)).toEqual(1);
    expect(mf.power(0, 0)).toEqual(1);
  });
  it('testa função factorial', () => {
    expect(mf.factorial(5)).toEqual(120);
    expect(mf.factorial(10)).toEqual(3628800);
    expect(mf.factorial(3)).toEqual(6);
    expect(mf.factorial(8)).toEqual(40320);
    expect(mf.factorial(2)).toEqual(2);
  });
});
