import { Bowerman } from "../Bowerman";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Bowerman'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Bowerman'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Bowerman(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Bowerman('Олег', 'Bowerman');
    expect(result.toString()).toEqual('Bowerman Олег (уровень: 1, здоровье: 100, атака: 25, защита: 25)');
  });