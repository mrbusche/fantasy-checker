# Fantasy Football add/drop checker

## Schedule

* Task will run once an hour by default. You can update in [.github/workflows/cypress.yml](.github/workflows/cypress.yml). Instead of `*/1` update the 1 to 6 to run the task every 6 hours.

## Monitors an ESPN URL for adds/drops. Only works if your league is public.

* Update [cypress/integration/fantasy_spec.js#L3](cypress/integration/fantasy_spec.js#L3) to be your ESPN league id
* The script will read all values in the table and put them into 1 long string. If any value changes, then the task will fail and you'll need to update the expected value [cypress/integration/fantasy_spec.js#L8](cypress/integration/fantasy_spec.js#L8)
* If any win, loss, trade, add, drop, IR activation, or IR deactivation happens you will receive an email at the configured schedule until the value has been updated.
