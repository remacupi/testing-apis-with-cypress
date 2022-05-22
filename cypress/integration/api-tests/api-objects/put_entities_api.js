import {ENTITIES_URL} from "../api-objects/urls_api";

export class PutEntitiesApi {
  //PUT entity
  putEntity(id,key,value){
    var put_request = ENTITIES_URL + id;
    cy.request('PUT', put_request, {key: value}).as('request');
  }

  //PUT entity with id created from fixture
  putCreatedEntity(key,value) {
      cy.get('@id').then(id => {
        this.putEntity(key,value);
      });
  }
}
