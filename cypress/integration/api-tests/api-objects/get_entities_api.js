import {ENTITIES_URL} from "../api-objects/urls_api";

export class GetEntitiesApi {

   //GET entity by ID
   getEntity(id){
     var get_request = ENTITIES_URL + id;
     cy.request('GET', get_request).as('request');
   }

   //GET created entity from fixture
   getCreatedEntity(){
     cy.get('@id').then(id=> {
       this.getEntity(id);
     });
   }

}
