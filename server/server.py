from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
import json


DEBUG = True
app = Flask(__name__)

SQLALCHEMY_DATABASE_URI = 'sqllite:///media.db'
SQLALCHEMY_BINDS = {
    'users':        'sqllite:///users.db',
}

app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_BINDS'] = SQLALCHEMY_BINDS

db = SQLAlchemy(app)
db.create_all()


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/", methods=['GET'])
def getFilms():
    return True

if __name__ == "__main__":
    app.run(debug=True)
