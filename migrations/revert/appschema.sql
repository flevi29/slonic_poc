-- Revert slonik_poc:appschema from pg

BEGIN;

DROP SCHEMA main_schema;

COMMIT;
