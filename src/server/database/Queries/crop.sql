-- Table: savera.crop

-- DROP TABLE savera.crop;

CREATE TABLE savera.crop
(
    crop_id integer NOT NULL,
    crop_type_id integer,
    season_type character varying COLLATE pg_catalog."default",
    name character varying COLLATE pg_catalog."default",
    CONSTRAINT crop_pkey PRIMARY KEY (crop_id)
)

TABLESPACE pg_default;

ALTER TABLE savera.crop
    OWNER to nxmwzpiqergtic;