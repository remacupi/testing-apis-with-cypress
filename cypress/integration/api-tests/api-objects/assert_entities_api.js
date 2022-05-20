export class AssertEntitiesApi {


  //ASSERT response code is the expected one
  assertResponseCode(expectedCode){
    cy.get('@request').then(response => {
        expect(response.status).to.eq(expectedCode);
    });
  }

  //ASSERT entity is the same as the created with JSON
  assertCreatedEntityNotUpdated(){
    cy.get('@entityJson').then(entityJson => {
      this.assertEntity(entityJson);
    })
  }

  //ASSERT entity key, value given have been updated and other values are the same
  assertCreatedEntityUpdated(key, value){
    cy.get('@entityJson').then(entityJson => {
      entityJson[key]=value;
      this.assertEntity(entityJson);
    })
  }

  //ASSERT entity is equal to a given JSON
    assertEntity(expectedJSonValue){
      cy.get('@request').then(response => {
          expect(response.body).to.eq(expectedJSonValue);
      });
    }


}
