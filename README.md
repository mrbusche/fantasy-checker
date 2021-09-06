# Fantasy Football add/drop checker

## Schedule

* Task will run once an hour by default. You can update in [.github/workflows/cypress.yml](.github/workflows/cypress.yml). Instead of `*/1` update the 1 to 6 to run the task every 6 hours.

## Monitors an ESPN URL for adds/drops. Only works if your league is public.

* Update [cypress/integration/fantasy_spec.js#L3](cypress/integration/fantasy_spec.js#L3) to be your ESPN league id
