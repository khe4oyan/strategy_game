import IModule from '../../interfaces/IModule';
import iconImg from '../../../assets/modules/move.png';

class MoveModule extends IModule {
  radius;

  constructor(person_ref, radius) {
    super("Move", person_ref, iconImg);
    this.radius = radius;
  }

  actionWhenSelect(map_ref) {
    // позиция персонажа
    // посчитать позиции на карте где нужно показать активные клетки
  }

  actionWhenUse(map_ref, {i, j}) {
    // выполнить перемещение по указанным координатам
  }
}

export default MoveModule;