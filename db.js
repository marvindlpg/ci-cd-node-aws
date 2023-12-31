const Sequelize = require ('sequelize');
const UserModel = require('./models/users');
const CustomerModel = require('./models/customers');
const ProviderModel = require('./models/providers');
const DiagnosModel = require('./models/diagnoses');
const Related_diagnosisModel = require('./models/related_diagnoses');

const sequelize = new  Sequelize('delconsas_backendnodejs1', 'delconsa_user', 'Ariana_2017' , {
    host: 'host5.bienvenidohosting.com',
    dialect: 'mysql'
});


const User = UserModel(sequelize, Sequelize);
const Customer = CustomerModel(sequelize, Sequelize);
const Provider = ProviderModel(sequelize, Sequelize);
const Diagnos = DiagnosModel(sequelize, Sequelize);
const Related_diagnosis = Related_diagnosisModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas Sincronizadas')
})

module.exports = {
   
    User,
    Customer,
    Provider,
    Diagnos,
    Related_diagnosis
}