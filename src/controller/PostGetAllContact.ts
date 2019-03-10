import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Contact} from "../entity/contactInfo";

/**
 * Loads all posts from the database.
 */
export async function postGetAllContacts(request: Request, response: Response) {

    // call from GET repository to perform operations with GET
    const getRepositoryRecords = getManager().getRepository(Contact);

    // load records 
    const results = await getRepositoryRecords.find();

    // return loaded posts
    response.send(results);
}