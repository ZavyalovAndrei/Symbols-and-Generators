const NAME_LENGTH_MIN = 2;
const NAME_LENGTH_MAX = 10;
const CORRECT_TYPE = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
    constructor(name, type) {
        if (name.length < NAME_LENGTH_MIN) {
            throw new Error('Ошибка! Имя "'+ name +'" слишком кототкое, должно быть не менее 2-х символов.')
        } else if (name.length > NAME_LENGTH_MAX){
            throw new Error('Ошибка! Имя "'+ name +'" слишком длинное, должно быть не более 10-и символов.')
        } else{
            this.name = name;
        }
        if (CORRECT_TYPE.includes(type)) {
            this.type = type;
        } else {
            throw new Error('Ошибка! '+ type + ' - неизвестный тип персонажа.');
        }
       
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    toString() {
        return (this.type + ' ' + this.name + ' (уровень: ' + this.level + ', здоровье: ' + this.health 
        + ', атака: ' + this.attack + ', защита: ' + this.defence + ')');
    }
}
