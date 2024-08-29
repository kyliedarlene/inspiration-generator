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

@app.route('/characters', methods = ['GET', 'POST'])
def characters():
    characters = [character.to_dict() for character in Character.query.all()]

    if request.method == 'GET':
        response = make_response(
            characters,
            200
        )
    elif request.method == 'POST':
        try: 
            form_data = request.get_json()

            new_character = Character()
            for attr in dir(Character):
                if attr in form_data:
                    setattr(new_character, attr, form_data[attr])

            db.session.add(new_character)
            db.session.commit()

            response = make_response(
                new_character.to_dict(),
                201
            )
        except ValueError as e:
            response = make_response(
                { "errors": [str(e)] }, 
                400
            )
        except: ## improvement (low-priority): make non-Value error messages more informative 
                    # How to catch IntegrityError for NULL constraint violation?
            response = make_response(
                { "errors": ['Please try again.'] }, 
                400
            )

    return response


if __name__ == '__main__':
    app.run(port=5555, debug=True)
