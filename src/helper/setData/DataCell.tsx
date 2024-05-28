const DataCell = ({background, children}: {background?: string, children: React.ReactNode}) => (
  <td className={`px-6 py-4 ${(background) ? 'animate-changeBackground' : 'bg-gray-50' }`}>{children}</td>
);

export default DataCell;
