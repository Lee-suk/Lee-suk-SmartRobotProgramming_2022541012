//https://sequelize.org/docs/v6/core-concepts/model-basics/
// Model Definition

var { Sequelize } = require("sequelize")

// Extending Model 
global.User = sequelize.define('User', {

    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING
    },

    password: {
        type: Sequelize.STRING
    }
});

global.Board = sequelize.define('Board', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    //제목
    title: Sequelize.STRING,
    //내용
    body: Sequelize.TEXT,
    //작성시간
    writeTime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW

    },
    //조회수
    viewCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }


});

// Model synchronization
sequelize.sync({
    alter: true
})


