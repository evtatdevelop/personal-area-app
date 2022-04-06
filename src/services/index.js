export default class Service {
  constructor() {
    // this._apiBase = 'https://jsonplaceholder.typicode.com/';
    this._apiBase = 'http://localhost:3000/';
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
      method: 'PATCH',
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


  getContacts = () => this.getResource(`${this._apiBase}contacts`);
  delContact = id => this.deleteResource(`${this._apiBase}contacts/${id}`); 
  updateContact = data => this.updateResource(`${this._apiBase}contacts/${data.id}`, data);
  addContact = data => this.postResource(`${this._apiBase}contacts`, data);


  // ! Test server response
  auth = async (login, pass) => {
    if (login !== 'tester@test.tst' || pass !== 'password' ) return false;
    return {
      email: login,
      expiresIn: "3600",
      idToken: "QWAS123456789QWAS",
      // kind: "identitytoolkit#SinupNewUserResponse",
      localId: "qwerty123456789",
      refreshToken: "ASDFGH987654321"
    } 
  }


}