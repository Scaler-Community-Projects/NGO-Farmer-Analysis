-- Table: savera.fc_crp_mapping

-- DROP TABLE savera.fc_crp_mapping;

CREATE TABLE savera.fc_crp_mapping
(
    fc_id integer,
    crp_id integer,
    is_active bit(1),
    is_deleted bit(1),
    created_date date,
    modified_date date,
    created_by character varying COLLATE pg_catalog."default",
    modified_by character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE savera.fc_crp_mapping
    OWNER to nxmwzpiqergtic;