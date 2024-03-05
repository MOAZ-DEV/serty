import bcrypt from "bcrypt";
import { MongoClient, ServerApiVersion } from "mongodb";
import { userData } from "~/utils/user";
export default defineEventHandler(async (evt) => {

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
    { username, email, password } = await readBody(evt),
    hashedPass = await bcrypt.hash(password, 10);

  const existingUser = await db.collection('users').findOne({
    $or: [{ username }, { email }]
  });
  if (existingUser) {
    return {
      err: 'Username or email seem to be taken.'
    };
  };
  const newUser:userData = {
    uid: '686jjlh',
    username,
    email,
    password: hashedPass
  } 
  await db.collection('users').insertOne(newUser);

  return "New user registration done!"+hashedPass;

})

