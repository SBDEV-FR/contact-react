import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const loadContacts = useCallback(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const saveContacts = useCallback((newContacts) => {
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  }, []);

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(value)) {
      setPhoneError('Veuillez entrer uniquement des chiffres pour le numéro de téléphone.');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Veuillez entrer une adresse email valide.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("Tous les champs doivent être remplis !");
      return;
    }

    if (!validatePhone(phone) || !validateEmail(email)) {
      return;
    }

    let newContacts;
    if (editingIndex !== null) {
      newContacts = contacts.map((contact, index) => 
        index === editingIndex ? { name, phone, email } : contact
      );
    } else {
      newContacts = [...contacts, { name, phone, email }];
    }

    setContacts(newContacts);
    saveContacts(newContacts);
    setName('');
    setPhone('');
    setEmail('');
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const contact = contacts[index];
    setName(contact.name);
    setPhone(contact.phone);
    setEmail(contact.email);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
    saveContacts(newContacts);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedContacts = contacts
    .filter(contact => 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion de Contacts</h1>
        <div className="content-wrapper">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  validatePhone(e.target.value);
                }}
                required
              />
              {phoneError && <p className="error-message">{phoneError}</p>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                required
              />
              {emailError && <p className="error-message">{emailError}</p>}
              <button type="submit">{editingIndex !== null ? 'Modifier' : 'Ajouter'}</button>
            </form>
          </div>
          <div className="table-container">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort('name')}>Nom {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}</th>
                  <th onClick={() => handleSort('phone')}>Téléphone {sortColumn === 'phone' && (sortDirection === 'asc' ? '▲' : '▼')}</th>
                  <th onClick={() => handleSort('email')}>Email {sortColumn === 'email' && (sortDirection === 'asc' ? '▲' : '▼')}</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedContacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEdit(index)}>Modifier</button>
                      <button className="delete-btn" onClick={() => handleDelete(index)}>Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;