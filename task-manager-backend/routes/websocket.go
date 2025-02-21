package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"log"
	"task-manager-backend/models"
)

var upgrader = websocket.Upgrader{}
var clients = make(map[*websocket.Conn]bool)
var broadcast = make(chan models.Task)

func HandleWebSocket(c *gin.Context) {
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Println("WebSocket upgrade failed:", err)
		return
	}
	defer conn.Close()
	clients[conn] = true

	for task := range broadcast {
		for client := range clients {
			err := client.WriteJSON(task)
			if err != nil {
				client.Close()
				delete(clients, client)
			}
		}
	}
}
