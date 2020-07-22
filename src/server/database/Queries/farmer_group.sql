-- Table: savera.farmer_group

-- DROP TABLE savera.farmer_group;

CREATE TABLE savera.farmer_group
(
    group_id integer NOT NULL,
    group_name character varying COLLATE pg_catalog."default",
    group_code character varying COLLATE pg_catalog."default",
    name_of_organization character varying COLLATE pg_catalog."default",
    institution_type character varying COLLATE pg_catalog."default",
    district character varying COLLATE pg_catalog."default",
    block character varying COLLATE pg_catalog."default",
    gram_panchayat character varying COLLATE pg_catalog."default",
    formation_date date,
    CONSTRAINT farmer_group_pkey PRIMARY KEY (group_id)
)

TABLESPACE pg_default;

ALTER TABLE savera.farmer_group
    OWNER to nxmwzpiqergtic; 