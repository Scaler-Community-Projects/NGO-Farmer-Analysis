-- Table: savera.agro_training

-- DROP TABLE savera.agro_training;

CREATE TABLE savera.agro_training
(
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying COLLATE pg_catalog."default",
    type character varying COLLATE pg_catalog."default",
    created_date date,
    modified_date date,
    created_by character varying COLLATE pg_catalog."default",
    modified_by character varying COLLATE pg_catalog."default",
    CONSTRAINT agro_training_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE savera.agro_training
    OWNER to nxmwzpiqergtic;