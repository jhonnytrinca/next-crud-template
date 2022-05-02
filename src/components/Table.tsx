import Client from '../core/Client';
import { IconEdit, IconTrash } from './Icons';

interface TableProps {
  clients: Client[];
  onEdit?: (cli: Client) => void;
  onDelete?: (cli: Client) => void;
}

export default function Table(props: TableProps) {
  const renderHeader = () => {
    return (
      <tr>
        <th className='text-left p-4'>Código</th>
        <th className='text-left p-4'>Nome</th>
        <th className='text-left p-4'>Idade</th>
        {(props.onEdit || props.onDelete) && <th className='p-4'>Ações</th>}
      </tr>
    );
  };

  const renderData = () => {
    return props.clients?.map((cli, i) => {
      return (
        <tr
          key={cli.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className='text-left p-4'>{cli.id}</td>
          <td className='text-left p-4'>{cli.name}</td>
          <td className='text-left p-4'>{cli.age}</td>
          {(props.onEdit || props.onDelete) && (
            <td className='flex justify-center items-center'>
              {props.onEdit && (
                <button
                  onClick={() => props.onEdit?.(cli)}
                  className='flex justify-center items-center text-green-600 rounded-full p-2 hover:bg-purple-50 m-1 '
                >
                  {IconEdit}
                </button>
              )}
              {props.onDelete && (
                <button
                  onClick={() => props.onDelete?.(cli)}
                  className='flex justify-center items-center text-red-500 rounded-full p-2 hover:bg-purple-50 m-1'
                >
                  {IconTrash}
                </button>
              )}
            </td>
          )}
        </tr>
      );
    });
  };

  return (
    <table className='w-full rounded-xl overflow-hidden'>
      <thead className='text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800'>
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
