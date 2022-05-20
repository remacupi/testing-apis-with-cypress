# testing-apis-with-cypress
 
# RUN TEST IN LOCAL
Go to Test Directory: testing-api-with-cypress
1. Install Node: https://nodejs.org/
2. Install Cypress: npm install cypress
3. Install Cucumber: npm install cypress-cucumber-preprocessor
4. Execute tests: npm test

# RUN TEST ON CI
Go to circleCI: https://app.circleci.com/pipelines/github/remacupi/testing-apis-with-cypress?invite=true
-> The project is configured to run on the ci. After add cucumber dependency, the build failed because it not found the dependency (need some time to investigate the reason, because in local works)
