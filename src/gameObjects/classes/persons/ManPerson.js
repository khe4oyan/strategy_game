// interface
import IPerson from "../../interfaces/Iperson";

// img
import iconImg from '../../../assets/persons/man.png';

// modules
import MoveModule from '../modules/MoveModule';
import AttackModule from '../modules/AttackModule';

class ManPerson extends IPerson {
  constructor(map_ref, i, j) {
    super("Man", [], iconImg, 100, map_ref, i, j);
  
    this.modules = [
      new MoveModule(this, 3),
      new AttackModule(this, 25, 5),
    ];
  }
}

export default ManPerson;