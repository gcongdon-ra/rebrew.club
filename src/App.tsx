import React, { useEffect, useState } from 'react';

import { Brew } from './Brew';
import { Controls } from './Controls';
import { Color } from './Color';
import { Temperature } from './Temperature';
import { Timer } from './Timer';
import { Name } from './Name';
import { Overlay } from './Overlay';
import { Weight } from './Weight';
import { Water } from './Water';

import './App.scss';
import { cls } from './utils';

const isPWA = () => (window.matchMedia('(display-mode: standalone)').matches) || ((window.navigator as any).standalone) || document.referrer.includes('android-app://');

function App() {
  const [name, setName] = useState('Tea');
  const [selected, setSelected] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [isCelsius, setIsCelsius] = useState(true);
  const [color, setColor] = useState('');
  const [weight, setWeight] = useState(0);
  const [isMassWeight, setIsMassWeight] = useState(true);
  const [water, setWater] = useState(0);
  const [isMassWater, setIsMassWater] = useState(true);
  const [brew, _setBrew] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isOut, setIsOut] = useState(false);
  const [time, setTime] = useState(15);
  const [lastTime, setLastTime] = useState(time);
  const [autoBrewTime, setAutoBrewTime] = useState(true);

  const reset = () => {
    setName('Tea');
    setColor('');
    setSelected('');
    setBrew(0);
    setWater(0);
    setTemperature(0);
    setWeight(0);
    setTime(0);
    setIsDone(false);
    setIsTicking(false);
    setIsOut(false);
  }

  const setBrew = (count: number) => {
    setIsTicking(!isTicking)
    setIsDone(false);
    setIsOut(false);
    if (autoBrewTime) {
      setLastTime(time + 15);
    }
    return _setBrew(count);
  }

  useEffect(() => {
    if (!isTicking) {
      return () => { };
    }
    const timer = setTimeout(() => {
      setTime(time - 1);
      if (time <= 0) {
        setIsTicking(false);
        setIsDone(true);
        setTime(0);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [isTicking, time]);

  useEffect(() => {
    if (isDone && isOut) {
      setTimeout(() => {
        setIsDone(false)
        setSelected('overlay')
      }, 200);
    }
  }, [isDone, isOut]);

  const classes = cls([
    isPWA() ? 'pwa' : '',
    selected ? 'selecting' : '',
  ]);


  return (
    <main className={classes} >
      <Controls onNew={reset} />
      <Name selected={selected} setSelected={setSelected} name={name} setName={setName} />

      <Temperature selected={selected} setSelected={setSelected} temperature={temperature} setTemperature={setTemperature} isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
      <Color selected={selected} setSelected={setSelected} color={color} setColor={setColor} />

      <Weight selected={selected} setSelected={setSelected} weight={weight} setWeight={setWeight} isMass={isMassWeight} setIsMass={setIsMassWeight} />
      <Water selected={selected} setSelected={setSelected} water={water} setWater={setWater} isMass={isMassWater} setIsMass={setIsMassWater} />

      <Timer selected={selected} setSelected={setSelected} time={time} setTime={setTime} />
      <Brew selected={selected} setSelected={setSelected} isTicking={isTicking} brew={brew} setBrew={setBrew} />

      <Overlay isDone={isDone} isOut={isOut} setIsOut={setIsOut} setTime={setTime} lastTime={lastTime} />
    </main>
  );
}



export default App;