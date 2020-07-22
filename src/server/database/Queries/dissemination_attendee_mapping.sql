-- Table: savera.dissemination_attendee_mapping

-- DROP TABLE savera.dissemination_attendee_mapping;

CREATE TABLE savera.dissemination_attendee_mapping
(
    event_id integer NOT NULL,
    dissemination_id integer NOT NULL,
    farmer_id integer NOT NULL,
    adoption_id integer,
    question_id integer,
    CONSTRAINT dissemination_attendee_mapping_pkey PRIMARY KEY (event_id),
    CONSTRAINT dissemination_attendee_mapping_adoption_id_fkey FOREIGN KEY (adoption_id)
        REFERENCES savera.adoption_table (adp_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT dissemination_attendee_mapping_dissemination_id_fkey FOREIGN KEY (dissemination_id)
        REFERENCES savera.dissemination (dissemination_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT dissemination_attendee_mapping_farmer_id_fkey FOREIGN KEY (farmer_id)
        REFERENCES savera.farmer (farmer_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT dissemination_attendee_mapping_question_id_fkey FOREIGN KEY (question_id)
        REFERENCES savera.question_table (q_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE savera.dissemination_attendee_mapping
    OWNER to nxmwzpiqergtic;