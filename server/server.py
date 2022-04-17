from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import json


DEBUG = True
app = Flask(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

"""
SQLALCHEMY_DATABASE_URI = 'sqllite:///media.db'
SQLALCHEMY_BINDS = {
    'users':        'sqllite:///users.db',
}

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_BINDS'] = SQLALCHEMY_BINDS

db = SQLAlchemy(app)
db.create_all()
"""


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/films", methods=['GET'])
def getFilms():
    return {"success":True}

@app.route("/api/registrateUser", methods=['GET', 'POST'])
def registrateUser():
    return {"success": True}

@app.route("/api/loginUser", methods=['GET', 'POST'])
def loginUser():
    return {"success": True}


if __name__ == "__main__":
    app.run(debug=True)
