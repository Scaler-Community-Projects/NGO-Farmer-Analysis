-- Table: savera.crp

-- DROP TABLE savera.crp;

CREATE TABLE savera.crp
(
    crp_id integer NOT NULL,
    fc_id integer,
    name character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default",
    gender character varying COLLATE pg_catalog."default",
    CONSTRAINT crp_pkey PRIMARY KEY (crp_id)
)

TABLESPACE pg_default;

ALTER TABLE savera.crp
    OWNER to nxmwzpiqergtic; 