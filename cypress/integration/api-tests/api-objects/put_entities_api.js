export class PutEntitiesApi {
  //PUT entity
  putEntity(id,key,value){
    cy.request('PUT', `/entities/${id}`, {key: value}).as('request');
  }

  //PUT entity created from the context
  putCreatedEntity(key,value) {
      cy.get('@id').then(id => {
        this.putEntity(key,value);
      });
  }
}
