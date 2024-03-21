package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/api/oidc-configuration", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		response := map[string]string{
			"authority": "some company",
			"scopes":    "login profile",
		}

		if err := json.NewEncoder(w).Encode(response); err != nil {
			log.Fatalf("Error encoding JSON: %v", err)
		}
	})

	log.Println("Server starting on port 8099...")
	if err := http.ListenAndServe(":8099", nil); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
