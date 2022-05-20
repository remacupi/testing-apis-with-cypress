import { DeleteEntitiesApi } from "../api-objects/delete_entities_api"

//remove created entity after each scenario
//the recomendation is to clean before run the test, but the api does not allow to delete by name or custom tag, so I have to delete after
afterEach(() => {
  const deleteEntitiesApi = new DeleteEntitiesApi();
  deleteEntitiesApi.deleteCreatedEntity();
  console.log("delete entity");
});
