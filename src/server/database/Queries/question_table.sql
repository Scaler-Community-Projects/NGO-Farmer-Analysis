-- Table: savera.question_table

-- DROP TABLE savera.question_table;

CREATE TABLE savera.question_table
(
    q_id integer NOT NULL,
    question text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT question_table_pkey PRIMARY KEY (q_id)
)

TABLESPACE pg_default;

ALTER TABLE savera.question_table
    OWNER to nxmwzpiqergtic;