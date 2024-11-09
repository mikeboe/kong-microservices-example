package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	
	router.GET("/go", func(context *gin.Context) {
    context.JSON(http.StatusOK, gin.H{"data": "Hello from GO API 👋!"})    
  	})

	router.GET("/go/protected", func(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{"data": "Protected route from GO API 👋!"})
	})

	router.Run(":3002")
}