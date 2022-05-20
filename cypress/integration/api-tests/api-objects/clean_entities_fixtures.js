import { DeleteEntitiesApi } from "../api-objects/delete_entities_api"

//remove created entity after each scenario
afterEach(() => {
  const deleteEntitiesApi = new DeleteEntitiesApi();
  deleteEntitiesApi.deleteCreatedEntity();
  console.log("delete entity");
});
