// interface
import IPerson from '../../interfaces/Iperson';

// img
import iconImg from '../../../assets/persons/rock.png';

class RockPerson extends IPerson {
  constructor(map_ref, i, j) {
    super("Rock", [], iconImg, 110, map_ref, i, j);
  }
}

export default RockPerson;