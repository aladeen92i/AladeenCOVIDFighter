To start the api you need :

Go 
PostgresSQL

check the https://github.com/golang/go/wiki/SettingGOPATH

gorilla/mux — A powerful URL router and dispatcher. We use this package to match URL paths with their handlers.

jinzhu/gorm — The fantastic ORM library for Golang, aims to be developer friendly. We use this ORM(Object relational mapper) package to interact smoothly with our database

dgrijalva/jwt-go — Used to sign and verify JWT tokens

joho/godotenv — Used to load .env files into the project

To install any of this package, open terminal and run

`` go get github.com/{package-name} ``