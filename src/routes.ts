import {postGetAllContacts} from "./controller/PostGetAllContact";
import {postGetContactById} from "./controller/PostGetByIdAction";
import {postSaveAction} from "./controller/PostSaveAction";
import{postUpdateContactById} from "./controller/PostUpdateContactById"
import{postDeleteById} from "./controller/PostDeleteRecordById"
/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/contact",
        method: "get",
        action: postGetAllContacts
    },
    {
        path: "/contact/:id",
        method: "get",
        action: postGetContactById
    },
    {
        path: "/contact/:id",
        method: "put",
        action: postUpdateContactById
    },
    {
        path: "/contact",
        method: "post",
        action: postSaveAction
    },

    {
        path: "/contact/:id",
        method: "delete",
        action: postDeleteById
    }
];