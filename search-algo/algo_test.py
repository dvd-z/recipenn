#!/usr/bin/env python

import json
from pprint import pprint
from timeit import default_timer

file = 'test/test.json'
fridge = ['eggs', 'cucumber', 'chicken', 'peppers', 'mushrooms']

with open(file, encoding='utf-8') as recipes:
	data = json.load(recipes)

greatestMatches = 0
currentMatches = 0
index = 0
start = default_timer()

for position, recipe in enumerate(data):
	for item in fridge:
		for ingredient in recipe['ingredients']:
			if item in ingredient:
				currentMatches = currentMatches + 1
	if currentMatches > greatestMatches:
		greatestMatches = currentMatches
		index = position 
	currentMatches = 0

end = default_timer() - start
print(end)
print(index)
pprint(data[index])