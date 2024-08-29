#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import *

# Views go here!

@app.route('/')
def index():
    return '<h1>Inspiration Generator API</h1>'

@app.route('/characters')
def characters():
    characters = [character.to_dict() for character in Character.query.all()]

    response = make_response(
        characters,
        200
    )

    return response


if __name__ == '__main__':
    app.run(port=5555, debug=True)
