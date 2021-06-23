const sqlite3 = require('sqlite3').verbose();

class Database {
    constructor(fileName) {
        this.db = new sqlite3.Database(fileName, sqlite3.OPEN_READWRITE, (error) => {
            if(error) {
                return console.error(error.message);
            }
            console.log("Подключились к БД");
        })
    }
    AddFeedback(data) {
        return new Promise((resolve, reject) => {
            this.db.run("insert into Feedback (Name, Email, Phone, Message) values (?, ?, ?, ?)", [data.name, data.email, data.phone, data.message], (error) => {
                if(error) {
                    console.error(error);
                    reject(error);
                }
                resolve("success");
            })

        })
    }
}

module.exports.DatabaseController = Database;