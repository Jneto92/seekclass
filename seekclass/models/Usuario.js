const db = require('./db');

const Usuario = db.sequelize.define('usuarios', {
    nome:{
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    email:{
        type: db.Sequelize.STRING,
        unique: "email_user",
        allowNull: false
    },
    senha:{
        type: db.Sequelize.STRING
    },
    status:{
        type: db.Sequelize.BOOLEAN
    }
});

//Usuario.sync({force: true});

module.exports = Usuario;