# Makefile
install: #выполнить npm ci
	npm ci
brain-games: #запустить игру
	node bin/brain-games.js
brain-even: #Чётные
	node bin/brain-even.js
brain-gcd: #Общиё делитель
	node bin/brain-gcd.js
brain-calc: #Calculator
	node bin/brain-calc.js
brain-progression: #Progression
	node bin/brain-progression.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .