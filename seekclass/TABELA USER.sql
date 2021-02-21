CREATE DATABASE SISTEMASEEKCLASS;
CREATE TABLE USUARIOS(
    USUARIO_ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100),
    EMAIL VARCHAR(100),
    SENHA VARCHAR(20),
    constraint ID_USUARIO PRIMARY KEY (USUARIO_ID),
    constraint EMAIL_USER unique (EMAIL)
);


INSERT INTO USUARIOS(NOME, EMAIL) VALUES (
    "JOSÉ NETO LIMA NASCIMENTO",
    "NETOLIMA1992@GMAIL.COM"
);

INSERT INTO USUARIOS(NOME, EMAIL) VALUES 
    ("MARIA DENISE SIMOES",
    "maria.simoes@estudante.ifb.edu.br"),
    ("Samuel Machado",
    "samuel.machado@estudante.ifb.edu.br"),
    ("Wendell Rodrigues Feliciano",
    "wendell.feliciano@estudante.ifb.edu.br"),
    ("andre.santos@estudante.ifb.edu.br",
    "André Luiz Gomes Dos Santos"),
    ("caio.sallenave@estudante.ifb.edu.br",
    "Caio Nathan Gomes Sallenave"),
    ("douglas.shibata@estudante.ifb.edu.br", 
    "Douglas Seidi Shibata"),
    ("jose.izabel@estudante.ifb.edu.br",
    "José Augusto Chaves Izabel"),
    ("mikaela.pereira@estudante.ifb.edu.br",
    "Mikaela Brito Pereira");
    //brenda.teixeira@estudante.ifb.edu.br;




ALTER TABLE USUARIOS ADD constraint EMAIL_USER UNIQUE (EMAIL);
ALTER TABLE USUARIOS modify email unique;

create database materias;
CREATE TABLE materias(
    MATERIA_ID INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    PROFESSOR VARCHAR(100) NOT NULL,
    TURNO VARCHAR(1) NOT NULL,
    SEMESTRE INTEGER NOT NULL,
    CARGA_HORARIA INTEGER,
    constraint ID_USUARIO PRIMARY KEY (MATERIA_ID)
);

INSERT INTO MATERIAS(NOME, PROFESSOR, TURNO, SEMESTRE) VALUES 
("INTRODUÇÃO A COMPUTAÇÃO","HUGO DO CARMO", "V", 1),
("LÓGICA DE PROGRAMAÇÃO 1","MARCELO FERES", "V", 1),
("METODOLIGIA CIENTÍFICA E ELABORAÇÃO DE TEXTOS", "DENISE GOMES", "V", 1),
("CONSTRUÇÃO DE PÁGINAS PARA INTERNET 1", "TIAGO SEGATO", "V", 1),
("REDES DE COMPUTADORES E INTERNET", "DIOGENES REIS", "V", 1);


SELECT email, senha FROM usuarios
WHERE email='jose.nascimento@estudante.ifb.edu.br' AND senha='040510';
