export class GetEntitiesApi {

   //GET entity by ID
   getEntity(id){
     cy.request('GET', `/todos/${id}`).as('request');
   }

   //GET created entity
   getCreatedEntity(){
     cy.get('@id').then(id=> {
       this.getEntity(id);
     });
   }

}
