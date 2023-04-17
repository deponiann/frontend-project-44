# Makefile
install: #выполнить npm ci
	npm ci
brain-games: #запустить игру
	node bin/brain-games.js
brain-even: #Чётные
	node bin/brain-even.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .