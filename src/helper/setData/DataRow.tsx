import DataCell from "./DataCell";
import formatNumber from "../../helper/formatNumber/formatNumber";
import { DataItem } from "../interface/interface";
const DataRow = ({item}: {item: DataItem}) => (
    <tr key={item.id} className={`border-b border-gray-200 dark:border-gray-700 ${(item.background) ? 'animate-changeBackground' : 'bg-white' }`}>
      <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  text-white bg-gray-800">{item.name}</th>
      <DataCell background={item.background}>{formatNumber(item.priceUsd)}</DataCell>
      <td>{formatNumber(item.marketCapUsd)}</td>
      <DataCell background={item.background}>{formatNumber(item.vwap24Hr)}</DataCell>
      <td className="px-6 py-4">{formatNumber(item.supply)}</td>
      <DataCell background={item.background}>{formatNumber(item.volumeUsd24Hr)}</DataCell>
      <td className="px-6 py-4">{formatNumber(item.changePercent24Hr)}</td>
    </tr>
  );
export default DataRow