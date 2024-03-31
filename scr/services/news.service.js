import News from "../models/News.js";

export const createService = (body) => News.create(body);

export const findAllServices = (offset, limit) => News.find().sort({id:-1}).skip(offset).limit(limit).populate('user');  

export const countNews = () => News.countDocuments();

export const topNewsService = () => News.findOne().sort({_id:-1}).populate('user');

export const findByIdService = (id) => News.findById(id).populate('user');