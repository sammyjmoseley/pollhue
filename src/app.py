from flask import Response, render_template, jsonify, send_file, send_from_directory, Flask, session
from flask_socketio import emit, SocketIO
import os
from flask_login import LoginManager, login_user, login_required, current_user, logout_user
from src.user import DefaultUserApi
from hashlib import md5

api = DefaultUserApi()

app = Flask(__name__,
            static_url_path='',
            static_folder='../public/')

app.secret_key = 'cshello'

login_manager = LoginManager()

login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id: int):
    print("load user: " + str(user_id))
    return api.get_user(user_id=user_id)


@app.route("/authenticate", methods=['POST'])
def authenticate():
    user = load_user(user_id=1)
    login_user(user)
    print(current_user.is_authenticated)
    return jsonify({'success':True}), 200, {'ContentType':'application/json'}


@app.route("/name")
@login_required
def get_name():
    return jsonify({'first_name': current_user.first_name})


@app.route("/logout", methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'success': True}), 200, {'ContentType': 'application/json'}


@app.route("/")
def hello():
    return send_file(os.path.join('..', 'public', 'index.html'))


if __name__ == "__main__":
    # socketio.run(app, host='0.0.0.0', port=8000)
    app.run(host='0.0.0.0', port=8000)
    print(current_user)
