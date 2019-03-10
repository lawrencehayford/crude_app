import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Contact} from "../entity/contactInfo";

/**
 * Loads post by a given id.
 */
export async function postGetContactById(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const contactRepository = getManager().getRepository(Contact);

    // load a post by a given post id
    const result = await contactRepository.findOne(request.params.id);

    // if post was not found return 404 to the client
    if (!result) {
        response.status(404).json({Message: "No Record was Found"});
        response.end();
        return;
    }

    // return loaded post
    response.send(result);
}
