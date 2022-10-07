DROP TABLE IF EXISTS "koallas";


CREATE TABLE "koallas" (
"id" serial primary key,
"name" varchar not null,
"gender" varchar(1) not null,
"age" integer,
"ready_to_transfer" BOOLEAN DEFAULT FALSE,
"notes" varchar not null
);


INSERT INTO "koallas"("name", "gender", "age", "ready_to_transfer", "notes")
VALUES
('SCOTTY', 'M' , '4' , 'True' , 'Born in Guatemala'),
('Jean', 'F', '5' , 'True', 'Allergic to lots of lava'),
('Orono', 'F', '7' , 'False', 'Loves listening to Paula (Abdul)'),
('Logan', 'M', '15' , 'False' , 'Loves the sauna'),
('Charlie' , 'M', '9' , 'True' , 'Favorite band is Nirvana'),
('Betsy', 'F' , '4' , 'True' , 'Has a pet iguana');