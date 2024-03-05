import bcrypt from "bcrypt";
import { MongoClient, ServerApiVersion } from "mongodb";
import Cookies from "universal-cookie";
export default defineEventHandler(async (evt) => {

  const cookie = new Cookies();
  const
    clientUsername = encodeURIComponent("moaazallaelden01"),
    clientPassword = encodeURIComponent("Sitany2003");
  const
    uri = `mongodb+srv://${clientUsername}:${clientPassword}@cluster0.dnxdl7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  const
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  const
    db = client.db(process.env.DB_NAME as string);
  const
    { username, password } = await readBody(evt);
  const existingUser = await db.collection('users').findOne({
    $or: [{ username: username }, { email: username }]
  });
  if (existingUser) {
    let result = '';
    await bcrypt.compare(password, existingUser.password) ? cookie.set('uid', existingUser._id, {
      path: '/', maxAge: 3600
    }) : result = "It's Wrong Thieff!!";
    return result !== '' ? result : {
      redirect: '/app'
    };
  };
  return 'done';
})
