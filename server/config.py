"""Flask config."""
import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))

# the .env is in the root, not the same folder as server
load_dotenv(os.path.join(basedir, '../.env'))

print(basedir)
TESTING = True
DEBUG = True
FLASK_ENV = 'development'
SECRET_KEY = os.environ.get('CLIENT_SECRET')
CLIENT_ID = os.environ.get('CLIENT_ID')
CALLBACK = os.environ.get('redirect')
