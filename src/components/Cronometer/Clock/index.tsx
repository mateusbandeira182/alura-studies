import style from "./Clock.module.scss";

interface IProps {
  time: number | undefined;

}
export default function Clock({ time = 0 }: IProps){

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [ minutesDecimal, minutesUnity ] = String(minutes).padStart(2, '0');
  const [ secondsDecimal, secondsUnity ] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.relogioNumero}>{minutesDecimal}</span>
      <span className={style.relogioNumero}>{minutesUnity}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsDecimal}</span>
      <span className={style.relogioNumero}>{secondsUnity}</span>
    </>
  );
}