'use strict';
'use strict';
module.exports = {
    up: async (queryInterface ,Sequelize) => {
        return queryInterface.addColumn('users', 'role',{
            type :Sequelize.DataTypes.ENUM,
            value: [
                'reviewer',
                'admin',
            ],
            defaultValue: 'reviewer'
        })
    },
    down:async (queueInterface,Sequelize) => {
        return queueInterface.removeColum('users','role')
    }
  
};
