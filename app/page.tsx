import styles from "./page.module.css";
import Picker from "../pages/dp";
import {DatePicker, Space} from 'antd';
import Data from "./data";

const { RangePicker } = DatePicker;

export default async function Home() {

  const data = await Data();
  const totalCount = data.totalCount;
  const carList = data.list;
  const nextCursor = data.nextCursor;
  // console.log(carList);
  // console.log(totalCount);
  return (
      <main className={styles.main}>
        <div className={styles.center}>

          <table>
            <thead>

            </thead>
            <tbody>
            {carList && carList.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.name}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </main>
  );
}
