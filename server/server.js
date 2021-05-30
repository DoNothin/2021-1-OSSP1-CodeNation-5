const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const express = require('express'); //express 프레임워크 사용합니다.
const app = express();

const port = process.env.port || 8000; //서버의 포트번호를 지정해줍니다. 5000번에서 확인할 수 있습니다.

const OAuth2Data = require("./credentials.json");
var TokenData;

const CLIENT_ID = OAuth2Data.web.client_id;
const CLIENT_SECRET = OAuth2Data.web.client_secret;
const REDIRECT_URL = OAuth2Data.web.redirect_uris[0];

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);
var authed = false;

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'token.json'

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 이후 데이터를 주고 받을 때 post방식을 사용하기 위한 초기 설정입니다. 무시하시면 됩니다.
  


/*function listFiles(auth) {
    const drive = google.drive({version: 'v3', auth});
    drive.files.list({
      pageSize: 10,
      fields: 'nextPageToken, files(id, name)',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      const files = res.data.files;
      if (files.length) {
        console.log('Files:');
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log('No files found.');
      }
    });
}*/

/*app.get('/api', (req, res) => {
    if(authed == false)
    {
        var url = oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: SCOPES
        });
        console.log("[/api]->url : " + url);
        res.send({
            authed: false,
            url: url
        });
    }

    else
    {
        res.send({message: "완료"});
        /*var oauth2 = google.oauth2({
            auth: oAuth2Client,
            version: "v2"
        });
        oauth2.userinfo.get(function(err, response) {
            if(err) console.log("[oauth2.userinfo.get() Error] : " + err);
            else
            {
                console.log(response.data);
                res.send({
                    authed: authed,
                    name: response.data.name,
                    pic: response.data.picture
                });
            }
        });
    }
});

app.get('/google/callback', function(req, res) {
    const code = req.query.code;
    console.log("in [/google/callback]");
    if(code)
    {
        oAuth2Client.getToken(code, function(err, tokens) {
            if(err) console.log("Authenticating Error : " + err);
            else
            {
                console.log("Authenticating Success");
                oAuth2Client.setCredentials(tokens);
                console.log(oAuth2Client.credentials);
                authed = true;
                fs.writeFile('tokens.json', JSON.stringify(tokens), "utf8", function(err) {
                    console.log(err);
                });
                console.log("redirect /api authed: " + authed);
                res.redirect("/api");
            }
        })
    }
})*/

app.listen(port, () => {
    console.log(`listening on port${port}`);
});
