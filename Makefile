start:
	@echo Start Application
	npm start

install:
	@echo Install Dependencies
	npm install

init:
	@echo Running Install and Start
	npm install && npm start

test:
	npm test

coverage: 
	npm run coverage

build:
	npm run build

.PHONY: start install init test build coverage