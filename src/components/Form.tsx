import { useState } from 'react';
import Client from '../core/Client';
import Button from './Button';
import Input from './Input';

interface FormProps {
  client?: Client;
  onClose?: () => void;
  onSave?: (client: Client) => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? '');
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div className='bg-gray-200 rounded-lg p-4'>
      {id && <Input text='Código' value={id} readOnly />}
      <Input text='Nome' value={name} onChange={setName} />
      <Input text='Idade' type='number' value={age} onChange={setAge} />
      <div className='flex justify-end mt-5 gap-2'>
        <Button
          className='from-blue-400 to-blue-700'
          onClick={() => props.onSave?.(new Client(name, +age, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button className='from-gray-400 to-gray-700' onClick={props.onClose}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
