import styles from './test-lib.module.css';

/* eslint-disable-next-line */
export interface TestLibProps {}

const f =()=>{
  alert("Шутка прибаутка")
}
export function TestLib(props: TestLibProps) {
  return (
    <div> Тестовый компонент

      <button onClick={f}>Хехехехе</button>
    </div>
  );
}

export default TestLib;
