package main

import "net/http"

func main(){
	mux := http.NewServeMux()

	mux.Handle("GET /{$}", http.HandlerFunc(home))

	mux.Handle("./ui/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./ui/static"))))

	http.ListenAndServe(":8080", mux)
}