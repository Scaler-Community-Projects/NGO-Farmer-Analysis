
CREATE TABLE savera.crp
(
    crp_id integer NOT NULL,
    fc_id integer,
    name character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default",
    gender character varying COLLATE pg_catalog."default",
    CONSTRAINT crp_pkey PRIMARY KEY (crp_id)
)
