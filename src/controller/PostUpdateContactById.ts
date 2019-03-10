import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Contact} from "../entity/contactInfo";

export async function postUpdateContactById(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const updateRepository = getManager().getRepository(Contact);

    //get the entitiy fields

    const entityFields = new Contact();
    entityFields.first_name= request.body.first_name;
    entityFields.last_name= request.body.last_name;
    entityFields.address= request.body.address;
    entityFields.phone= request.body.phone;
    entityFields.gender= request.body.gender;
    // load a post by a given post id
    const result = await updateRepository.update({id: request.params.id},entityFields);

    // if post was not found return 404 to the client
    if (!result) {
        response.status(404).json({Message:"Record Not Found"});
        response.end();
        return;
    }


    // return success message
    response.status(200).json({Message:"Record Updated with Id: " + request.params.id + " Updated Successfuly" });
}