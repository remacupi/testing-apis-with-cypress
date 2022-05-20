import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import { PostEntitiesApi } from "../api-objects/post_entities_api"
import { PutEntitiesApi } from "../api-objects/put_entities_api"
import { GetEntitiesApi } from "../api-objects/get_entities_api"
import { AssertEntitiesApi } from "../api-objects/assert_entities_api"

//API OBJECTS
const postEntitiesApi = new PostEntitiesApi();
const putEntitiesApi = new PutEntitiesApi();
const getEntitiesApi = new GetEntitiesApi();
const assertEntitiesApi = new AssertEntitiesApi();



//STEPS TO CREATE DATA
Given('I POST a new entity',()=>{
  postEntitiesApi.postFixtureEntity();
  assertEntitiesApi.assertResponseCode(201);
})

//PUT STEPS
When(`I PUT created entity {string} with {string}`,(key,value)=>{
  putEntitiesApi.putCreatedEntity(key,value);
})

//STEPS TO VERIFY DATA
When('I GET created entity',()=>{
  getEntitiesApi.getCreatedEntity();
})

//VERIFY CODES
Then('I should see OK code',()=>{
  assertEntitiesApi.assertResponseCode(200);
})

Then('I should see ERROR code',()=>{
  assertEntitiesApi.assertResponseCode(400);
})

//VERIFY RESPONSES
Then('The entity is not updated',()=>{
  assertEntitiesApi.assertCreatedEntityNotUpdated();
})

Then(`The entity is updated with {string} with {string}`,(key,value)=>{
  assertEntitiesApi.assertCreatedEntityUpdated(key,value);
})
