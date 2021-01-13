const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init ({
            salt: {
                type: Sequelize.STRING(64),
                allowNull: false,
            },
            pw: {
                type: Sequelize.STRING(64),
                allowNull: false,                
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            enabled: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Userdata',
            tableName: 'userdatas',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}