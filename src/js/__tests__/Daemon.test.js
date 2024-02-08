import { Daemon } from "../Daemon";

test.each([
  ['Ошибка! Имя "W" слишком кототкое, должно быть не менее 2-х символов.', 'W', 'Daemon'], 
  ['Ошибка! Human - неизвестный тип персонажа.', 'Сева', 'Human'], 
  ['Ошибка! Имя "Максимилиан" слишком длинное, должно быть не более 10-и символов.', 'Максимилиан', 'Daemon'],
])(
  'should throw error %s with name: %s and type: %s', ( errorText, name, type ) => {
    expect(()=>{new Daemon(name, type)}).toThrow(errorText);
  
});

  test('should return character to string', () => {
    const result = new Daemon('Олег', 'Daemon');
    expect(result.toString()).toEqual('Daemon Олег (уровень: 1, здоровье: 100, атака: 10, защита: 40)');
  });