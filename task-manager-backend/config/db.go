package config

import (
	"database/sql"
	"log"
	_ "github.com/lib/pq"
)

var DB *sql.DB

func InitDB() {
	var err error
	DB, err = sql.Open("postgres", "postgres://user:pass@localhost:5432/taskdb?sslmode=disable")
	if err != nil {
		log.Fatal("Database connection error:", err)
	}
	if err = DB.Ping(); err != nil {
		log.Fatal("Database ping error:", err)
	}
	log.Println("Connected to the database")
}
