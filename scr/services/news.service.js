import News from "../models/User.js";

const createService = (body) => News.create(body);

const findAllServices = () => News.find();  

export default { 
    createService,
    findAllServices
 };