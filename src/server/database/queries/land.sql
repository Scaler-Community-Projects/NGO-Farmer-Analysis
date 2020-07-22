
CREATE TABLE savera.land
(
    land_id integer NOT NULL,
    farmer_id integer,
    address character varying COLLATE pg_catalog."default",
    area character varying COLLATE pg_catalog."default",
    CONSTRAINT land_pkey PRIMARY KEY (land_id)
)
