import Loading from '../../loading/loading';
import DataRow from "../../../helper/setData/DataRow";
import { DataItem , Error } from '../../../helper/interface/interface';
export default function dataTable({ coins, error }: { coins: DataItem[], error: Error }) {  
    const renderData = () => {
        if (error.bool) {
          return <tr><td colSpan={7}>{error.message}</td></tr>;
        }
        if (!coins || coins.length === 0) {
          return <tr><td colSpan={7}><Loading /></td></tr>;
        }
        return (
          <>
            {coins.map((e) => (
              <DataRow key={e.id} item={e} />
            ))}
          </>
        );
      };
  return (
    <>
        {renderData()}
    </>
  )
}
