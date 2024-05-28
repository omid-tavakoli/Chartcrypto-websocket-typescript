import { Error, DataItem } from '../../../helper/interface/interface';
import DataTable from '../dataTable/dataTable';

export default function Table({ coins , error }: { coins: DataItem[], error: Error }) {

  return (
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-800">Name</th>
            <th scope="col" className="px-6 py-3 bg-gray-50">Price</th>
            <th scope="col" className="px-6 py-3 bg-gray-800">Market Cap</th>
            <th scope="col" className="px-6 py-3 bg-gray-50">VWAP(24Hr)</th>
            <th scope="col" className="px-6 py-3 bg-gray-800">Supply</th>
            <th scope="col" className="px-6 py-3 bg-gray-50">Volume (24Hr)</th>
            <th scope="col" className="px-6 py-3 bg-gray-800">Change (24Hr)</th>
          </tr>
        </thead>
        <tbody className="relative">
          <DataTable error={error} coins={coins}/>
        </tbody>
      </table>
    </div>
  );
}
