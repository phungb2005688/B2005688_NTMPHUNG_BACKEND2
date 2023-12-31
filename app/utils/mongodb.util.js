const {MongoClient} = require("mongodb");

// Định nghĩa lớp kết nối đến MongoDB
class MongoDB {
    static connect = async (uri) => {
        if(this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;