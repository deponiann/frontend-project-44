# Makefile
install: #выполнить npm ci
	npm ci

brain-games: #запустить игру
	node bin/brain-games.js
	