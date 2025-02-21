package routes

import (
	"github.com/gin-gonic/gin"
	"task-manager-backend/config"
	"task-manager-backend/models"
	"net/http"
)

func TaskRoutes(r *gin.RouterGroup) { // Changed *gin.Engine to *gin.RouterGroup
	r.POST("/tasks", func(c *gin.Context) {
		var task models.Task
		if err := c.BindJSON(&task); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
			return
		}

		_, err := config.DB.Exec("INSERT INTO tasks (title, assigned_to, status) VALUES ($1, $2, $3)", task.Title, task.AssignedTo, "pending")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create task"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Task created"})
	})

	r.GET("/tasks", func(c *gin.Context) {
		rows, err := config.DB.Query("SELECT id, title, assigned_to, status FROM tasks")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch tasks"})
			return
		}
		defer rows.Close()

		var tasks []models.Task
		for rows.Next() {
			var t models.Task
			rows.Scan(&t.ID, &t.Title, &t.AssignedTo, &t.Status)
			tasks = append(tasks, t)
		}
		c.JSON(http.StatusOK, tasks)
	})
}
