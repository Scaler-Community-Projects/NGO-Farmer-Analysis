-- Table: savera.dissemination

-- DROP TABLE savera.dissemination;

CREATE TABLE savera.dissemination
(
    crp_id integer NOT NULL,
    date_of_dissemination date NOT NULL,
    dissemination_id integer NOT NULL,
    end_time date NOT NULL,
    gram_panchayat character varying(255) COLLATE pg_catalog."default" NOT NULL,
    name_of_video character varying(255) COLLATE pg_catalog."default" NOT NULL,
    place character varying(255) COLLATE pg_catalog."default" NOT NULL,
    start_time date NOT NULL,
    village_name character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT dissemination_pk PRIMARY KEY (dissemination_id),
    CONSTRAINT crp_fk FOREIGN KEY (crp_id)
        REFERENCES savera.crp (crp_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE savera.dissemination
    OWNER to nxmwzpiqergtic;