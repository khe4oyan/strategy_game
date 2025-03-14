// libs
import { useDispatch } from 'react-redux';

// slices
import { deactiveAllActiveSquares } from '../../store/slices/mapSlice';
import { moduleIndSelect, moduleIndDeselect } from '../../store/slices/selectedModuleSlice';
import { showActiveSquares } from '../../store/slices/mapSlice';

// styles
import classes from './styles.module.css';

export default function Module({ moduleData, isActiveModule, moduleInd, map_ref }) {
  const {
    // person_ref, 
    title, 
    img, 
    attack, 
    radius, 
    cooldownConst,
    cooldownCurrent,
    heal,
  } = moduleData;

  const dispatch = useDispatch();

  const moduleClick = () => {
    // проверить есть ли кулл даун или нет
    if (cooldownCurrent !== undefined && cooldownCurrent !== 0) {
      return;
    }

    // удалить все активированные клетки
    dispatch(deactiveAllActiveSquares());

    if (isActiveModule) {
      // если выбран этот же скилл, то просто удалить
      dispatch(moduleIndDeselect());
    } else {
      // установить индекс выбранного скилла
      dispatch(moduleIndSelect(moduleInd));
  
      // вызвать метод при выборе скилла
      dispatch(showActiveSquares(moduleData.actionWhenSelect.bind(moduleData)));
    }
  };

  return (
    <button onClick={moduleClick} className={`${classes.root} ${isActiveModule && classes.rootActive}`}>
      {
        moduleData?.cooldownCurrent > 0 && 
        <div className={classes.cooldown}>{ cooldownCurrent }</div>
      }
      <img src={img} alt="skill" className={classes.img}/>
      <div className={classes.info}>
        <p className={classes.title}>{title}</p>
        { radius && <p>Radius: {radius}</p>}
        { attack && <p>Damage: {attack}</p>}
        { heal && <p>Heal: {heal}</p>}
        { cooldownConst && <p>Cooldown: {cooldownConst}</p>}
      </div>
    </button>
  )
}