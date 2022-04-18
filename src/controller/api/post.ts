import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const getALlPost = async (req : Request<{'id':string, 'name': string}>, res: Response, next: NextFunction) => {
    console.log(req.params.id)
    
    let result: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');

    let posts: [Post] = result.data;

    return res.status(200).json({
        message:posts
    });
};

export default {getALlPost};