export default class Service {
  constructor() {
    this._apiBase = 'https://jsonplaceholder.typicode.com/';
  }

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json();   
  }

  postResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }

  updateResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }

  deleteResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error(`Could non fetch ${url}. Status: ${res.status}`);
    return await res.json(); 
  }


  getContacts = () => this.getResource(`${this._apiBase}users`);

  // TODO: Currently, the delete result on the server is fake.
  delContact = id => this.deleteResource(`${this._apiBase}users/id`); 
  
  // TODO: Currently, the update contact on the server is fake.
  updateContact = data => this.updateResource(`${this._apiBase}users/${data.id}`, data);

  // TODO: Currently, the post contact on the server is fake.
  addContact = data => this.postResource(`${this._apiBase}users`, data);



}