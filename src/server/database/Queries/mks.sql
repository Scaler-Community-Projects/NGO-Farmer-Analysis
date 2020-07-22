-- Table: savera.mks

-- DROP TABLE savera.mks;

CREATE TABLE savera.mks
(
    mks_id integer NOT NULL,
    name character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default",
    CONSTRAINT mks_pkey PRIMARY KEY (mks_id)
)

TABLESPACE pg_default;

ALTER TABLE savera.mks
    OWNER to nxmwzpiqergtic;