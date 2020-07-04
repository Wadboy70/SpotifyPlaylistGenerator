from flask import Flask, jsonify, make_response
import main

app = Flask(__name__)


# @app.route("/")
# def home():
#     return "Hello World!"

# @app.route("/")
# def authent():
#     """User Authentification."""
#     token = main.authentication(main.username, main.scope, main.CLIENT_ID, main.CLIENT_SECRET)
#     return token

# if __name__=='__main__':
#     app.run(debug=True)