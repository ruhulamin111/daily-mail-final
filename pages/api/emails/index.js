import { getMessages, postMessages } from "../../../controller/emails";

export default async function handler(req, res) {


    // getting type of request
    const { method } = req;

    switch (method) {
        case "GET":
            getMessages(req, res);
            break;
        case "POST":
            postMessages(req, res);
            break;

        default:
            res.setHeader('allow', ['get', 'post', 'put', 'delete']);;
            res.status(405).end(`method ${method} is not allowed`)
            break;
    }
}