# Makefile
install: #выполнить npm ci
	npm ci
brain-games: #запустить игру
	node bin/brain-games.js
brain-even: #Чётные
	node bin/brain-even.js
brain-gcd: #Общий делитель
	node bin/brain-gcd.js
brain-calc: #Калькулятор
	node bin/brain-calc.js
brain-progression: #Прогрессия
	node bin/brain-progression.js
brain-prime: #Простое ли число?
	node bin/brain-prime.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .