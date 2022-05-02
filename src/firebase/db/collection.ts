import Client from '../../core/Client';
import ClientRepo from '../../core/ClientRepo';
import firebase from '../config';

export default class Collection implements ClientRepo {
  #conversor = {
    toFirestore(client: Client) {
      return {name: client.name, age: client.age}
    },
    fromFirestore(snap: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
      const data = snap.data(options)
      return new Client(data.name, data.age, snap.id)
    }
  }

  async save(client: Client): Promise<Client | undefined> {
    if (client?.id) {
      await this.collection().doc(client.id).set(client)
      return client
    } else {
      const docRef = await this.collection().add(client)
      const doc = await docRef.get()
      return doc.data()
    }
  }

  async delete(client: Client): Promise<void> {
    return this.collection().doc(client.id).delete()
  }

  async getAll(): Promise<Client[]> {
    const query = await this.collection().get()
    return query.docs.map((doc: any) => doc.data()) ?? []

  }

  private collection() {
    return firebase.firestore().collection('clientes').withConverter(this.#conversor)
  }

}