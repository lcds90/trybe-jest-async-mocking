const adventure = require('../src/setupTeardown');
/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('quem sobreviveu?', () => {
  beforeEach(() => {
    adventure.randomAttack();
  });

  afterEach(() => {
    if (adventure.specialists.length === 1) {
      const survivor = adventure.specialists.map((s) => s)[0];
      console.log(`Sobrevivente da batalha: ${survivor.nome} - ${survivor.classe}`);
    } else {
      console.log('Sobreviventes: \n', adventure.specialists);
    }
  });

  // Adicione seu código aqui

  it('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  it('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  it('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  it('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  it('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
