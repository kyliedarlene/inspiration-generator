from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class Character(db.Model, SerializerMixin):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    race_name = db.Column(db.String)
    cls_name = db.Column(db.String)
    cls_desc = db.Column(db.String)
    arch_name = db.Column(db.String)
    arch_desc = db.Column(db.String)
    bkd_name = db.Column(db.String)
    bkd_desc = db.Column(db.String)