// libs
import { useSelector, useDispatch } from 'react-redux';

// components
import PersonInMap from '../PersonInMap';

// slices
import { personSelect, personDeselect } from '../../store/slices/selectedPersonSlice';
import { moduleIndDeselect } from '../../store/slices/selectedModuleSlice';
import { updateMap, deactiveAllActiveSquares, updateMapAfterMove } from '../../store/slices/mapSlice';

// styles
import classes from './styles.module.css';

export default function MapSquare({ squareData }) {
  const dispatch = useDispatch();

  const { 
    i: squareI, 
    j: squareJ, 
    person: squarePerson, 
    isActiveSquare 
  } = squareData;

  const { personI, personJ} = useSelector(s => s.selectedPersonSlice);
  const { selectedModuleInd } = useSelector(s => s.selectedModuleSlice);
  const { map: map_ref } = useSelector(s => s.mapSlice);

  const selectedPerson = map_ref?.[personI]?.[personJ]?.person;

  const squareClick = () => {
    if (selectedModuleInd < 0) {
      if (squarePerson !== null) {
        // если в квадрате персонаж сделать его активным и обнулить выбранный модуль
        if (squarePerson.isDead) {
          return;
        }
        dispatch(personSelect({ i: squareI, j: squareJ }));
      } else {
        dispatch(personDeselect());
      }
      dispatch(moduleIndDeselect());
    } else {
      // деактивировать активные квадраты
      dispatch(deactiveAllActiveSquares());

      // если квадрат активный применить способность модуля
      if (isActiveSquare) {
        dispatch(
          updateMap({
              moduleUse: selectedPerson.modules[selectedModuleInd].actionWhenUse.bind(selectedPerson.modules[selectedModuleInd]),
              args: {
                i: squareI,
                j: squareJ,
              },
            }
          )
        );

        // деактивировать активный модуль
        dispatch(moduleIndDeselect());

        // деактивировать активого персонажа
        dispatch(personDeselect());
        
        // после каждого хода
        dispatch(updateMapAfterMove());
      } else {
        // если квадрат не активный сбросить выбранный модуль
        dispatch(moduleIndDeselect());
      }
    }
  };

  return (
    <div className={`${classes.root} ${isActiveSquare && classes.rootActive} ${((squareI === personI) && (squareJ === personJ)) && classes.selectedPerson}`} onClick={squareClick}>
      {
        squareData.person &&
        <PersonInMap personData={squareData.person}/>
      }
    </div>
  )
}