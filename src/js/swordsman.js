import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defens = 10;
  }
}