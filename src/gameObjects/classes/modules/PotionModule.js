import IModuleCooldown from '../../interfaces/IModuleCooldown';
import iconImg from '../../../assets/modules/potion.png';

class PotionModule extends IModuleCooldown{
  heal;

  constructor(person_ref, heal = 10, cooldown = 2) {
    super("Potion", person_ref, iconImg, cooldown);
    this.heal = heal;
  }

  actionWhenSelect(map_ref) {
    for (let i = 0; i < map_ref.length; ++i) {
      for (let j = 0; j < map_ref[i].length; ++j) {
        if (map_ref[i][j].person !== null && map_ref[i][j].person.isDead === false) {
          map_ref[i][j].isActiveSquare = true;
        }
      }
    }
  }

  actionWhenUse(map_ref, {i, j}) {
    map_ref[i][j].person.damage(-this.heal);
    super.actionWhenUse(map_ref, {i, j});
  }
}

export default PotionModule;