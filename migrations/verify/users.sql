-- Verify slonik_poc:users on pg

BEGIN;

SELECT nickname, password, timestamp
FROM main_schema.users
WHERE FALSE;

ROLLBACK;
