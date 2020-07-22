
CREATE TABLE savera.crop_stats
(
    id integer NOT NULL,
    farmer_id integer,
    crop_id integer,
    area character varying COLLATE pg_catalog."default",
    yield character varying COLLATE pg_catalog."default",
    incremental_yield character varying COLLATE pg_catalog."default",
    incremental_income character varying COLLATE pg_catalog."default",
    incremental_biomass_yield character varying COLLATE pg_catalog."default",
    water_saved character varying COLLATE pg_catalog."default",
    fuel_saved character varying COLLATE pg_catalog."default",
    man_days_generated character varying COLLATE pg_catalog."default",
    CONSTRAINT crop_stats_pkey PRIMARY KEY (id)
)
