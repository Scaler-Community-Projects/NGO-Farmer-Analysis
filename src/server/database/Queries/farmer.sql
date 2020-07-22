-- Table: savera.farmer

-- DROP TABLE savera.farmer;

CREATE TABLE savera.farmer
(
    farmer_id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
    group_id integer,
    farmer_code character varying COLLATE pg_catalog."default",
    name character varying COLLATE pg_catalog."default",
    hamlet character varying COLLATE pg_catalog."default",
    category character varying COLLATE pg_catalog."default",
    father_name character varying COLLATE pg_catalog."default",
    mother_name character varying COLLATE pg_catalog."default",
    spouse_name character varying COLLATE pg_catalog."default",
    land_in_holding character varying COLLATE pg_catalog."default",
    designation character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default",
    gender character varying COLLATE pg_catalog."default",
    created_date date,
    modified_date date,
    created_by character varying COLLATE pg_catalog."default",
    modified_by character varying COLLATE pg_catalog."default",
    CONSTRAINT farmer_pkey PRIMARY KEY (farmer_id)
)

TABLESPACE pg_default;

ALTER TABLE savera.farmer
    OWNER to nxmwzpiqergtic; 