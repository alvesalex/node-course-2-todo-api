const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }).then((client) => {
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c75edd317df7098e7e8421c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c75f0f817df7098e7e842f2')
    }, {
        $set: {
            name: 'Alex'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
}, (err) => {
    console.log('Unable to connect to MongoDB server');
});