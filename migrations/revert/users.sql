-- Revert slonik_poc:users from pg

BEGIN;

DROP TABLE main_schema.users;

COMMIT;
