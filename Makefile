SHELL := /bin/bash

build:
	@interleave build src/*.js --wrap

test:
	@mocha --reporter spec

.PHONY: test