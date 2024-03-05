import { MongoClient, ServerApiVersion } from "mongodb";
import Cookies from "universal-cookie";
const cookie = new Cookies();
/**
export const checkUser = async () => {
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
    const currentUID = cookie.get('uid');
    const
        checkDB = db.collection('users').findOne({
            $or: [{ currentUID }]
        })
    currentUID && checkDB && currentUID === checkDB ?
        window.location.href = '/app' : window.location.href = '/login';

}
*/
export type userData = {

    uid: String,
    username: String,
    email: String,
    password: String,

    firstName?: String,
    secondName?: String,
    lastName?: String,

    bio?: String,

    birthdate?: Date,
    address?: String,
    socialStatue?: 'Maried' | 'single',
    militaryStatue?: 'declined' | 'postponed' | 'done',
    displayRole?: String,
    careerRole?: String,
    currentRole?: String,
    skills?: Array<String>,

    phoneNumbers?: Array<[
        name: String,
        number: Number
    ]>
    links?: Array<{
        name: String,
        link: String,
    }>

    experinces?: Array<{
        name: String,
        role: String,
        startingDate: Date,
        tillDate: Date,
        prefrence: String
    }>,
    works?: Array<{
        id: String,
        title: String,
        subTitle: String,
        details: String,
        date: Date,
        img: Date,
        previewLink: String,
        links: Array<{
            name: String,
            link: String,
        }>,
        showCaseMD: String,
    }>

    userPic?: String,
    userBg?: String,

    subscription?: {
        case: Boolean,
        displayPortfolio: Boolean
    }

}