const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // URL do seu servidor MongoDB
const dbName = 'sua_base_de_dados'; // Nome do seu banco de dados

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao MongoDB');
  
  const db = client.db(dbName);

  // Aqui você pode começar a realizar operações CRUD
});

db.collection('sua_colecao').insertOne({ nome: 'Exemplo', idade: 30 }, (err, result) => {
  if (err) {
    console.error('Erro ao inserir documento:', err);
    return;
  }
  console.log('Documento inserido com sucesso:', result.insertedId);
});

db.collection('sua_colecao').findOne({ nome: 'Exemplo' }, (err, document) => {
  if (err) {
    console.error('Erro ao buscar documento:', err);
    return;
  }
  console.log('Documento encontrado:', document);
});
Update (Atualizar):

db.collection('sua_colecao').updateOne({ nome: 'Exemplo' }, { $set: { idade: 31 } }, (err, result) => {
  if (err) {
    console.error('Erro ao atualizar documento:', err);
    return;
  }
  console.log('Documento atualizado com sucesso');
});

db.collection('sua_colecao').deleteOne({ nome: 'Exemplo' }, (err, result) => {
  if (err) {
    console.error('Erro ao deletar documento:', err);
    return;
  }
  console.log('Documento deletado com sucesso');
});

client.close();