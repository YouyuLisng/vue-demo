module.exports = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '', // root 密碼
        database: 'demo', // 資料庫名
        port: '3306'
    }
}

const sqlMap = {
    Stu: {
        show: 'select * from users',
    }
}
module.exports = sqlMap