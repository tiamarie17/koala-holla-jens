CREATE TABLE "koallas" (
"id" serial primary key,
"name" varchar not null,
"gender" varchar(1) not null,
"age" integer,
"ready_to_transfer" varchar(1) not null,
"notes" varchar not null
);


INSERT INTO "koallas"("name", "gender", "age", "ready_to_transfer", "notes")
VALUES
('SCOTTY', 'M' , '4' , 'Y' , 'Born in Guatemala'),
('Jean', 'F', '5' , 'Y', 'Allergic to lots of lava'),
('Orono', 'F', '7' , 'N', 'Loves listening to Paula (Abdul)'),
('Logan', 'M', '15' , 'N' , 'Loves the sauna'),
('Charlie' , 'M', '9' , 'Y' , 'Favorite band is Nirvana'),
('Betsy', 'F' , '4' , 'Y' , 'Has a pet iguana');


