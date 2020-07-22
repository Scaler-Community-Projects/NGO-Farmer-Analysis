CREATE TABLE savera.adoption_table
(
    adp_id integer NOT NULL,
    adp_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    crp_id integer NOT NULL,
    CONSTRAINT adoption_table_pkey PRIMARY KEY (adp_id),
    CONSTRAINT adp_id_fk FOREIGN KEY (crp_id)
        REFERENCES savera.crp (crp_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE savera.adoption_table
    OWNER to nxmwzpiqergtic;