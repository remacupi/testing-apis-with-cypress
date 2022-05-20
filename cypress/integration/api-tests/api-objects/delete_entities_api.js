export class DeleteEntitiesApi {

  //DELETE entity created with fixtures
  deleteCreatedEntity() {
    cy.get('@id').then(id => {
        this.deleteEntity(id);
    });
  }

  //DELETE entity by ID
  deleteEntity(id){
    cy.request('DELETE', `/todos/${id}`).as('request');
  }
}
