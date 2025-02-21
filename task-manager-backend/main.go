package main

import (
	"github.com/gin-gonic/gin"
	"task-manager-backend/config"
	"github.com/gin-contrib/cors"
	"task-manager-backend/routes"
	"task-manager-backend/middleware"
)

func main() {
	config.InitDB()
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Allow frontend access
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}))


	authGroup := r.Group("/")
	authGroup.Use(middleware.AuthMiddleware())
	routes.TaskRoutes(authGroup)

	routes.AuthRoutes(r)
	routes.AITaskRoutes(r)
	r.GET("/ws", routes.HandleWebSocket)

	r.Run(":8080")
}
