-- Verify slonik_poc:appschema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('main_schema', 'usage');

ROLLBACK;
