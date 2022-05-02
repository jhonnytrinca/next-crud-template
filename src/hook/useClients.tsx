import { useEffect, useState } from 'react';
import Client from '../core/Client';
import ClientRepo from '../core/ClientRepo';
import Collection from '../firebase/db/collection';

export default function useClient() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const repo: ClientRepo = new Collection();

  const getAll = () => {
    repo.getAll().then((res: Client[]) => {
      setClients(res);
      setVisible('table');
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAll, []);

  const onEdit = (cli: Client) => {
    setClient(cli);
    setVisible('form');
  };

  const onDelete = async (cli: Client) => {
    await repo.delete(cli);
    getAll();
  };

  const onSave = async (cli: Client) => {
    await repo.save(cli);
    getAll();
  };

  const newClient = () => {
    setClient(Client.empty());
    setVisible('form');
  };

  return {
    visible,
    setVisible,
    client,
    clients,
    onEdit,
    onDelete,
    onSave,
    newClient
  };
}
