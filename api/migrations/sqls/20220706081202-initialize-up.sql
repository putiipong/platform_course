/* Replace with your SQL commands */
CREATE TABLE "public"."courses"
(
    "id" SERIAL NOT NULL,
    "name" text NOT NULL,
    "description" text NOT NULL,
    "category" text NOT NULL,
    "image" text,
    "subject" text NOT NULL,
    "number_of_student" int4 NOT NULL,
    "ctime" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start_time" time NOT NULL,
    "end_time" time NOT NULL,
    "image_person" text,
    "price" text,
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."users"
(
    "id" SERIAL NOT NULL,
    "firstname" text NOT NULL,
    "lastname" text NOT NULL,
    "nickname" text NOT NULL,
    "birthday" date NOT NULL,
    "gender" text NOT NULL,
    "role" text NOT NULL,
    "username" text NOT NULL,
    "password" text NOT NULL,
    "ctime" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."users"
    ("id", "firstname", "lastname", "nickname", "birthday", "gender", "role", "username", "password", "ctime")
VALUES
    (1, 'admin', 'admin', 'admin', '2022-07-07', 'Male', 'Instructor', 'admin', '$2b$10$8tNru8EHEe0C8DCKCPgX6OWiflxGbtMhNq9PT.29F4aOj6bk.KloO', '2022-07-06 10:16:16.554411+00');