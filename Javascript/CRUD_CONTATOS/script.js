// Variável global para armazenar os contatos
let contacts = [];
let currentContactIndex = null;

// Função para renderizar os contatos na tabela
function renderContacts() {
  const tableBody = document.getElementById('contactsTableBody');
  tableBody.innerHTML = '';

  contacts.forEach((contact, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.phone}</td>
      <td>${contact.email}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" onclick="editContact(${index})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="deleteContact(${index})">Excluir</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Função para adicionar ou editar um contato
document.getElementById('saveContact').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (name && phone && email) {
    if (currentContactIndex !== null) {
      // Editar contato existente
      contacts[currentContactIndex] = { name, phone, email };
      currentContactIndex = null;
    } else {
      // Adicionar novo contato
      contacts.push({ name, phone, email });
    }

    // Limpar formulário e fechar modal
    document.getElementById('contactForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
    modal.hide();

    // Renderizar contatos atualizados
    renderContacts();
  }
});

// Função para editar um contato
function editContact(index) {
  const contact = contacts[index];
  document.getElementById('contactId').value = index;
  document.getElementById('name').value = contact.name;
  document.getElementById('phone').value = contact.phone;
  document.getElementById('email').value = contact.email;

  currentContactIndex = index;

  // Abrir modal
  const modal = new bootstrap.Modal(document.getElementById('contactModal'));
  modal.show();
}

// Função para excluir um contato
function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}

// Inicialização
renderContacts();