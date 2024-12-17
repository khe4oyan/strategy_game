// interface
import IPerson from "../../interfaces/Iperson";

// img
import iconImg from '../../../assets/persons/man.png';

// modules
import MoveModule from '../modules/MoveModule';
import AttackModule from '../modules/AttackModule';

class ManPerson extends IPerson {
  constructor(map_ref, i, j) {
    const modules = [
      new MoveModule(this, 3),
      new AttackModule(this, 25, 5),
    ];
    
    super("Man", modules, iconImg, 100, map_ref, i, j);
  }
}

export default ManPerson;