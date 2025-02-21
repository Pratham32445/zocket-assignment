package routes

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"github.com/sashabaranov/go-openai"
)

func AITaskRoutes(r *gin.Engine) {
	r.GET("/ai-task", func(c *gin.Context) {
		client := openai.NewClient("your-openai-api-key")
		resp, err := client.CreateChatCompletion(c, openai.ChatCompletionRequest{
			Model: "gpt-3.5-turbo",
			Messages: []openai.ChatCompletionMessage{
				{Role: "system", Content: "Suggest a task for a software engineer."},
			},
		})
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "AI failed"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"suggestion": resp.Choices[0].Message.Content})
	})
}
