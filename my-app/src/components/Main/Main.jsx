import React, {useState} from 'react';

import classes from './main.module.scss'

import {iconsData} from '../../mockData'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Main = () => {

  const [x, setX] = useState(0)

  const moveBlockLeft = () => {
    setX(x + 100)
    if (x === 0) setX(-300)
  }

  const moveBlockRight = () => {
    setX(x - 100)
    if (x === -300) setX(0)
  }
  return (
      <div className={classes.main}>
        <ArrowBackIosIcon
            fontSize={'large'}
            onClick={moveBlockLeft}
            cursor={'pointer'}
        />
        <div className={classes.overflow}>
          {iconsData.map((icon) => {
            return (
                <div
                    key={icon.id}
                    className={classes.main__container}
                    style={{transform: `translateX(${x}%)`}}
                >
                  <img
                      src={icon.icon}
                      alt={'пейзаж'}/>
                </div>
            )
          })}
        </div>
        <ArrowForwardIosIcon
            fontSize={'large'}
            cursor={'pointer'}
            onClick={moveBlockRight}
        />
      </div>
  );
};

export default Main;