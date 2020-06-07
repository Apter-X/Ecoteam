/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     07/06/2020 17:29:14                          */
/*==============================================================*/


drop table if exists CLIENT;

drop table if exists "ORDER";

drop table if exists PRODUCT;

drop table if exists TAKES;

/*==============================================================*/
/* Table: CLIENT                                                */
/*==============================================================*/
create table CLIENT
(
   ID_CLIENT            numeric(8,0) not null,
   FIRST_NAME           char(50),
   LAST_NAME            char(50),
   GENDER               text,
   PHONE_NUMBER         numeric(8,0),
   primary key (ID_CLIENT)
);

/*==============================================================*/
/* Table: "ORDER"                                               */
/*==============================================================*/
create table "ORDER"
(
   ID_ORDER             numeric(8,0) not null,
   ID_CLIENT            numeric(8,0) not null,
   ORDER_TIME           date,
   QUANTITY             numeric(8,0),
   primary key (ID_ORDER)
);

/*==============================================================*/
/* Table: PRODUCT                                               */
/*==============================================================*/
create table PRODUCT
(
   ID_PRODUCTS          numeric(8,0) not null,
   NAME                 char(50),
   PRICE_               float,
   primary key (ID_PRODUCTS)
);

/*==============================================================*/
/* Table: TAKES                                                 */
/*==============================================================*/
create table TAKES
(
   ID_ORDER             numeric(8,0) not null,
   ID_PRODUCTS          numeric(8,0) not null,
   primary key (ID_ORDER, ID_PRODUCTS)
);

alter table "ORDER" add constraint FK_MAKES foreign key (ID_CLIENT)
      references CLIENT (ID_CLIENT) on delete restrict on update restrict;

alter table TAKES add constraint FK_TAKES foreign key (ID_ORDER)
      references "ORDER" (ID_ORDER) on delete restrict on update restrict;

alter table TAKES add constraint FK_TAKES2 foreign key (ID_PRODUCTS)
      references PRODUCT (ID_PRODUCTS) on delete restrict on update restrict;