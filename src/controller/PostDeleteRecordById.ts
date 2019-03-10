import{Request,Response} from 'express';
import{getManager} from 'typeorm';
import{Contact} from '../entity/contactInfo';

export async function postDeleteById(request: Request,response:Response){

    //establish contact with entity

    const connection = getManager().getRepository(Contact);

    const result = await connection.delete({id: request.params.id});

    if(!result){
        response.status(404).json({Message:"Sorry, Contact not found"});
        response.end();
        return;
    }

    //if all goes well

    response.status(200).json({Message: "Record with Id: " + request.params.id + " is deleted"});


}
