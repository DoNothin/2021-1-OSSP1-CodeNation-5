const express = require('express'); //express 프레임워크 사용합니다.
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./auth');
const app = express();

const port = process.env.port || 5000; //서버의 포트번호를 지정해줍니다. 5000번에서 확인할 수 있습니다.

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 이후 데이터를 주고 받을 때 post방식을 사용하기 위한 초기 설정입니다. 무시하시면 됩니다.

var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'codenation',
    database: 'codenation_users'
});

connection.connect(function(err) {
    if(err)
        console.log("DB is connected");
    else
        console.log("DB connect error");
});

router.get('/', function(req, res) {

});

router.post('/register', auth.register);
router.post('/login', auth.login);

app.use('/api', router);
app.listen(port, () => {
    console.log(`listening on port${port}`);
});
