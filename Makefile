build:
	docker-compose run jekyll jekyll build -d docs
install:
	docker-compose run --rm jekyll bundle install
stop:
	docker-compose down
start:
	docker-compose up -d
