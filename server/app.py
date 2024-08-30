#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
from werkzeug.exceptions import NotFound

# Local imports
from config import app, db, api
from models import *

##### VIEWS #####

class Home(Resource):

    def get(self):
        response = make_response(
            { "message": "Inspiration Generator API" },
            200
        )
        return response
    
api.add_resource(Home, '/')

### error handling ###

@app.errorhandler(NotFound)
def handle_not_found(e):

    response = make_response(
        "Not Found: The requested resource does not exist.",
        404
    )

    return response

app.register_error_handler(404, handle_not_found)

### authentication ###

class Login(Resource):
    
    def post(self):
        email = request.get_json()['email']
        
        user = User.query.filter(User.email == email).first()

        session['user_id'] = user.id
        
        return user.to_dict()

api.add_resource(Login, '/login')

### characters ###

class Characters(Resource):

    def get(self):
        characters = [character.to_dict() for character in Character.query.all()]

        response = make_response(
            characters,
            200
        )

        return response
    
    def post(self):
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

        return response
    
api.add_resource(Characters, '/characters')

class CharacterByID(Resource):

    def get(self, id):
        character = Character.query.filter(Character.id == id).first()

        if not character:
            response = make_response(
                { "error": "Character not found." },
                404
            )
        else:
            response = make_response(
                character.to_dict(),
                200
            )
        
        return response
    
    def patch(self, id):
        character = Character.query.filter(Character.id == id).first()

        if not character:
            response = make_response(
                { "error": "Character not found." },
                404
            )
        else:
            form_data = request.get_json()

            for attr in form_data:
                setattr(character, attr, form_data[attr])

            db.session.commit()
            response = make_response(
                character.to_dict(), 
                202
            )

        return response
    
    def delete(self, id):
        character = Character.query.filter(Character.id == id).first()

        if not character:
            response = make_response(
                { "error": "Character not found." },
                404
            )
        else:
            db.session.delete(character)
            db.session.commit()
            response = make_response(
                { 
                    "delete_successful": True, 
                    "message": "Character deleted." 
                },
                200
            )

        return response

api.add_resource(CharacterByID, '/characters/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)