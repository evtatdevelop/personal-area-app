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

  getContacts = () => this.getResource(`${this._apiBase}users`);

  //TODO: Currently the result of this func is an array of users. In production, this should be a Boolean value that allows the data to be changed in the application or it can be a new array of users.
  delContact = id => this.getResource(`${this._apiBase}users`); 
  
  editContact = id => { return true; }

  // postForm = async (data) =>{
  //   return await this.postResource(
  //     `${this._apiBase}${this._service}/?data=oredr&${this._key}`
  //   , data);
  // }
}