
CREATE TABLE savera.crp_assignment
(
    assignment_id integer NOT NULL,
    meeting_name character varying COLLATE pg_catalog."default",
    crp_id integer,
    location character varying COLLATE pg_catalog."default",
    date date,
    CONSTRAINT crp_assignment_pkey PRIMARY KEY (assignment_id)
)
