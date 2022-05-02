import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Table from '../components/Table';
import Client from '../core/Client';
import ClientRepo from '../core/ClientRepo';
import Collection from '../firebase/db/collection';
import useClient from '../hook/useClients';

const Home: NextPage = () => {
  const {
    visible,
    setVisible,
    client,
    clients,
    onEdit,
    onDelete,
    onSave,
    newClient
  } = useClient();

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white'>
      <Layout title='Cadastro de clientes'>
        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button
                className='mb-4 from-green-400 to-green-700'
                onClick={newClient}
              >
                Novo cliente
              </Button>
            </div>
            <Table clients={clients} onEdit={onEdit} onDelete={onDelete} />
          </>
        ) : (
          <Form
            client={client}
            onClose={() => setVisible('table')}
            onSave={onSave}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
