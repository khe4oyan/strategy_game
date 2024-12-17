import IModule from '../../interfaces/IModule';
import iconImg from '../../../assets/modules/attack.png';

class AttackModule extends IModule{
  attack;
  radius;

  constructor(preson_ref, attack, radius) {
    super("Attack", preson_ref, iconImg);
    this.attack = attack;
    this.radius = radius;
  }

  actionWhenSelect(map_ref) {
    // позиция персонажа
    // посчитать позиции на карте где нужно показать активные клетки
  }

  actionWhenUse(map_ref, {i, j}) {
    // наносить урон по указанным координатам
  }
}

export default AttackModule;