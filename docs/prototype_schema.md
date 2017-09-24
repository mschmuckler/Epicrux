# Schema

## users
column name | data type | details
------------|-----------|----------
id  | integer | not null, primary key
username | string | not null, indexed, unique
password_digest | string | not null
session_token | string | not null, indexed, unique

## personal_details
column name | data type | details
------------|-----------|----------
id  | integer | not null, primary key
user_id | integer | not null, foreign key
first_name | string |
last_name | string |
age | date |
gender | enum |
residence | string |
med_allergies | array[strings] |
epilepsy_cause | text |

## dietetics
column name | data type | details
------------|-----------|----------
id  | integer | not null, primary key
user_id | integer | not null, foreign key
date | date | not null
weight | integer |
lactimal_level | integer |
diet_description | text |

## seizures
column name | data type | details
------------|-----------|----------
id  | integer | not null, primary key
user_id | integer | not null, foreign key
date | date | not null
start_time | time | not null
duration | time |
category | enum |
triggers | array[strings] |
descriptions | array[strings] |
post_events | array[strings] |
custom_comment | text |

## medications
column name | data type | details
------------|-----------|----------
id  | integer | not null, primary key
user_id | integer | not null, foreign key
name | enum | not null
start_date | date | not null
end_date | date |
dosage | integer | not null
daily_ingestion_time | time
generic | boolean
side_effects | array[strings]

## procedures
column name | data type | details
------------|-----------|----------
id  | integer | not null, primary key
user_id | integer | not null, foreign key
date | date | not null
name | string | not null
surgical | boolean |
side_effects | array[strings] |
