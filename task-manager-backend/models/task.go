package models

type Task struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	AssignedTo string `json:"assigned_to"`
	Status    string `json:"status"`
}
