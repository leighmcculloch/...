run: clean static sass run-go

build: clean static sass build-go

clean:
	rm -fR build

build-go:
	mkdir -p build
	go run *.go build

run-go:
	go run *.go server

sass:
	mkdir -p build/stylesheets
	cd source; wt compile -b ../build stylesheets/all.scss

static:
	mkdir build
	mkdir build/font
	mkdir build/javascript
	cp source/CNAME build/CNAME
	cp source/favicon.png build/favicon.png
	cp -r source/font/* build/font/
	cp -r source/javascript/* build/javascript/

push:
	git branch -D gh-pages 2>/dev/null | true
	git branch -D gh-pages-draft 2>/dev/null | true
	git checkout -b gh-pages-draft && \
	git add -f build && \
	git commit -m "Deploy to gh-pages" && \
	git subtree split --prefix build -b gh-pages && \
	git push --force origin gh-pages:gh-pages && \
	git checkout -

setup:
	# wellington is used for sass building
	brew install wellington
