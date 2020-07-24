
CREATE TABLE savera.fc
(
    fc_id integer NOT NULL,
    name character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default",
    gender character varying COLLATE pg_catalog."default",
    CONSTRAINT fc_pkey PRIMARY KEY (fc_id)
)
