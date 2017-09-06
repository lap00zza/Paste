-- This is the schema for our table. Very simple schema.
-- id:      is the auto incrementing paste id
-- title:   is the paste title
-- content: is the paste content
-- type:    is the paste type. Type means the programming language.
--          This is a int which get mapped via a enum in the program.
CREATE TABLE paste (
    id          BIGSERIAL       PRIMARY KEY,
    title       VARCHAR(100)    NOT NULL,
    content     VARCHAR         NOT NULL,
    type        SMALLINT        NOT NULL,
    timestamp   timestamp       NOT NULL
);
