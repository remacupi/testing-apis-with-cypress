import {ENTITIES_URL} from "../api-objects/urls_api"

export class DeleteEntitiesApi {

  //DELETE entity by ID
  deleteEntity(id){
    var deleteRequest = ENTITIES_URL + id;
    cy.request('DELETE', deleteRequest).as('request');
  }

  //DELETE entity created with fixtures
  deleteCreatedEntity() {
    cy.get('@id').then(id => {
        this.deleteEntity(id);
    });
  }

}
