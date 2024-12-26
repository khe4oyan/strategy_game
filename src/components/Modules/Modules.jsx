// libs
import { useSelector } from 'react-redux';

// components
import Module from '../Module';

// styles
import classes from './styles.module.css';

export default function Modules() {
  const { map: map_ref } = useSelector(s => s.mapSlice);
  const { selectedModuleInd } = useSelector(s => s.selectedModuleSlice);
  const { 
    personI,
    personJ,
  } = useSelector(s => s.selectedPersonSlice);

  const personModules = map_ref?.[personI]?.[personJ]?.person?.modules ?? [];

  return (
    <div className={classes.root}>
      {
        personModules.map((moduleData, i) =>
          <Module 
            key={i} 
            moduleData = {moduleData}
            isActiveModule={i === selectedModuleInd}
            moduleInd={i}
            map_ref={map_ref}
          />
        )
      }
    </div>
  )
}