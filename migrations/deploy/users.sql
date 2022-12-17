-- Deploy slonik_poc:users to pg
-- requires: appschema

BEGIN;

SET
client_min_messages = 'warning';

CREATE TABLE main_schema.users
(
    nickname  TEXT PRIMARY KEY,
    password  TEXT        NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMIT;
