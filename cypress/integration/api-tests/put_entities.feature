Feature: PUT Entities API
   Put entities api endpoint

Background: Create entity
    Given I POST a new entity

Scenario Outline: PUT entities with valid values
      When I PUT created entity '<key>' with '<value>'
      Then I should see OK code
      When I GET created entity
      Then I should see OK code
      Then The entity is updated with '<key>' with '<value>'
      Examples:
        |   key           |   value                  |
        |   name          |   entity1                |
        |   description   | entity description       |
        |   entity_type   |   application            |
        |   is_verified   |   true                   |
        |   department_id |   3                      |

Scenario Outline: PUT entities with invalid values
      When I PUT created entity '<key>' with '<value>'
      Then I should see ERROR code
      When I GET created entity
      Then I should see OK code
      Then The entity is not updated
      Examples:
        |   key           |   value                  |
        |   name          |                          |
        |   name          |   %*&=$)$                |
        |   description   | description 2 %*&=$)$    |
        |   description   |                          |
        |   entity_type   |   invalid                |
        |   entity_type   |                          |
        |   is_verified   |   invalid                |
        |   is_verified   |                          |
        |   department_id |   invalid                |
        |   department_id |                          |

Scenario: Put entities with non existing key
    When I PUT created entity 'invalid' with 'invalid'
    Then I should see ERROR code
    When I GET created entity
    Then I should see OK code
    Then The entity is not updated

Scenario: Put entities with empty key and value
  When I PUT created entity '' with ''
  Then I should see ERROR code
  When I GET created entity
  Then I should see OK code
  Then The entity is not updated
