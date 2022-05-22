import {ENTITIES_URL} from "../api-objects/urls_api";

export class PostEntitiesApi {

  //POST entity
  postEntity(entityJson){
    cy.request('POST', ENTITIES_URL, entityJson).as('request');
  }

  //POST an entity from JSON fixtures and save id in the context
  postFixtureEntity() {
    cy.fixture('entity').as('entityJson');
    cy.get('@entityJson').then(entityJson => {
      this.postEntity(entityJson);
      this.saveEntityId();
    });
  }

//save id of entity created
  saveEntityId() {
    cy.get('@request').then(request => {
      cy.wrap(request.body.entity_id).as('id');
    })
  }
}
