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

class Signup(Resource):

    def post(self):
        
        email = request.get_json()['email']
        # improvement: add email validation (preferably in model?)
        username = request.get_json()['username']
        # improvement: add username constraints
        password = request.get_json()['password']
        # improvement: add password requirements

        new_user = User(
            email=email,
            username=username,
            password_hash=password,
        )

        db.session.add(new_user)
        db.session.commit()

        return make_response(
            new_user.to_dict(),
            201
        )
    
api.add_resource(Signup, '/signup')

class Login(Resource):
    
    def post(self):
        email = request.get_json()['email']
        password = request.get_json()['password']
        
        user = User.query.filter(User.email == email).first()

        if user.authenticate(password):
            session['user_id'] = user.id
            response = make_response(
                user.to_dict(),
                200
            )
        else: 
            response = make_response(
                {'error': 'Invalid username or password'},
                401
            )

        return response

api.add_resource(Login, '/login')

class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {}, 204
    
api.add_resource(Logout, '/logout')

class CheckSession(Resource):
    
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if not user:
            return make_response({'message': "401: Not Authorized"}, 401)
        else:
            return make_response(user.to_dict(), 200)
        
api.add_resource(CheckSession, '/check_session')

### Users ###

class Users(Resource):

    def get(self):
        users = [user.to_dict() for user in User.query.all()]

        response = make_response(
            users,
            200
        )

        return response

api.add_resource(Users, '/users')

class UserById(Resource):

    def get(self, id):
        user = User.query.filter(User.id == id).first()

        # add: error handling

        return make_response(
            user.to_dict(),
            200
        )

api.add_resource(UserById, '/users/<int:id>')

### Characters ###

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

        # q: new_character.user_id = session.user.id (?)
        # q: what would error handling mean here?

        db.session.add(new_character)
        db.session.commit()

        response = make_response(
            new_character.to_dict(),
            201
        )

        return response
    
api.add_resource(Characters, '/characters')

class CharacterById(Resource):

    def get(self, id):
        character = Character.query.filter(Character.id == id).first()

        if character:
            return make_response(
                character.to_dict(),
                200
            )  
        else:
            return make_response(
                { "error": "Character not found." },
                404
            )
            
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

api.add_resource(CharacterById, '/characters/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)