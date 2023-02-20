import { useState, useEffect, useRef } from 'react';
interface countdownProps{
  countDown:number
}
export const CountDown = (props: countdownProps) => {
  const { countDown } = props;
  const cd = useRef<number>(countDown);
  const timer = useRef<any>(null);

  const [time, setTime] = useState<string>('');

  const dealData = () => {
    if (cd.current <= 0) {
      setTime('');
      return timer.current && clearTimeout(timer.current);
    }
    const d = parseInt(cd.current / (24 * 60 * 60) + '');
    const h = parseInt(((cd.current / (60 * 60)) % 24) + '');
    const m = parseInt(((cd.current / 60) % 60) + '');
    const s = parseInt((cd.current % 60) + '');
    if(d>0){
        setTime(`${d}D ${h}h:${m}m:${s}s`);
    }else{
        setTime(`${h}h:${m}m:${s}s`);
    }
    cd.current--;
    timer.current = setTimeout(() => {
      dealData();
    }, 1000);
  };

  useEffect((): any => {
    dealData();
    return () => {
        timer.current && clearTimeout(timer.current);
    }
  }, []);

  return <div className="text-white text-sm font-normal">{time}</div>;
};
