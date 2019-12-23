build:
	docker-compose run jekyll ./node_modules/.bin/gulp styles
	docker-compose run jekyll ./node_modules/.bin/gulp scripts
	docker-compose run jekyll jekyll build
install:
	docker-compose run --rm jekyll bundle install
stop:
	docker-compose down
start:
	@docker-compose up -d && echo "http://localhost:4000"
deploy:
	docker-compose run jekyll jekyll build -d docs
