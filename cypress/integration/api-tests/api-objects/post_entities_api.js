export class PostEntitiesApi {
  //POST entity
  postEntity(Json){
    cy.request('POST', '/todos/', {task: "run test"}).as('request');
  }

  //POST an entity from JSON fixtures and save id in the context
  postFixtureEntity() {
    cy.fixture('entity').as('entityJson');

    cy.get('@entityJson').then(entityJson => {
      this.postEntity(entityJson);

      cy.get('@request').then(request => {
        cy.wrap(request.body._id).as('id');
      })
    });
  }
}
