Start the application:

# Start Angular: ng serve
# Start server: node server.js


Backend:
**EXPRESS: npm install --save express

**NODEMON: npm install --save-dev nodemon //node monitor, if we change our node files, it will automatically refresh it

**BODY-PARSER: npm install --save-dev body-parser // http call body parser, access easily by that

**MONGOOSRE-UNIQUE-VALIDATOR: npm install --save mongoose-unique-validator // warn if I want to register with an already existed email

**BCRYPT: npm install --save bcrypt // it make a hash about user's password and store it in Db by hash, not in raw

**JSONWEBTOKEN : npm i --save jsonwebtoken


Connect node.js to MongoDB:
**MONGOOSE: npm install --save mongoose

Mongo connect:
mongodb+srv://admin:<password>@libby.kq1dmqy.mongodb.net/?retryWrites=true&w=majority

mongodb+srv://libby.kq1dmqy.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority


some TODOs:
- Validations, required fields (forms, password)
- Interfaces
- Add resolver to GET requests
- Redirect when token expired
- If quotes array empty -> UI

