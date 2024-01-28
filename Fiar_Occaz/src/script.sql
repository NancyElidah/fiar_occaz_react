create database voiture_occasion;
\c voiture_occasion

create table user(
    iduser serial primary key,
    email varchar(100),
    mdp varchar(100),
    etat int
);

create table type(
    idtype serial primary key,
    nom varchar(200)
);

create table marque(
    idmarque serial primary key,
    nom varchar(200)
);

create table modele(
    idmodele serial primary key,
    nom varchar(200)
);

create table energie(
    idenergie serial primary key,
    energie varchar(200)
);

create table boite_vitesse(
    idbv serial primary key,
    nom varchar(200)
);

create table couleur(
    idcouleur serial primary key,
    couleur varchar(200)
);

create table pays(
    idpays serial primary key,
    nom varchar(200)
);

create table voiture(
    idvoiture serial primary key,
    picture varchar(200),
    type int references type(idtype),
    marque int references marque(idmarque),
    modele int references modele(idmodele),
    energie int references energie(idenergie),
    boite_vitesse int references boite_vitesse(idbv),
    annee int,
    kilometrage double precision,
    prix double precision,
    couleur int references couleur(idcouleur),
    provenance int references pays(idpays),
    nbplace int,
    nbporte int
);

create table annonce(
    idannonce serial primary key,
    iduser int references user(iduser),
    idvoiture int references voiture(idvoiture),
    etat int
);