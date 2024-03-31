import {createServoce, findAllService} from '../services/news.service.js';

const create = async (req, res) => {
    try{
        const { title, text, banner } = req.body;

        if(!title || !text || !banner){
            return res.status(400).send({message: "Missing fields"});
        }

        await createService({
            title, 
            text, 
            banner,
            id: "objectidfake",
        });


        res.send(201);
    }catch(error){
        res.status(500).send({message: "Error"});
    }

  
};

const findAll = (req, res) => {
    const news = [];
  res.send(news);
};

export default { create, findAll};