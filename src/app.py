from flask import Response, render_template, jsonify, send_file, send_from_directory, Flask, session, request, redirect
from flask_socketio import emit, SocketIO
import os
from flask_login import LoginManager, login_user, login_required, current_user, logout_user
from user import DefaultUserApi

api = DefaultUserApi()

app = Flask(__name__,
            static_url_path='',
            static_folder='../public/')

app.secret_key = 'CS4780 Secret Key'

login_manager = LoginManager()

login_manager.init_app(app)

user_votes = {}


@login_manager.user_loader
def load_user(user_id: int):
    return api.get_user(user_id=user_id)


@login_manager.unauthorized_handler
def unauthorized_callback():
    return redirect("/login")


@app.route("/user/login", methods=['POST'])
def login():
    if 'email' not in request.form:
        return jsonify({'success': False}), 404, {'ContentType':'application/json'}
    email = request.form['email']
    user = api.create_user(email=email)
    login_user(user)
    return jsonify({'success': True}), 200, {'ContentType':'application/json'}


@app.route("/user/logout", methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'success': True}), 200, {'ContentType': 'application/json'}


@app.route("/")
def index():
    return send_file(os.path.join('..', 'public', 'index.html'))


@app.route("/login")
def login_page():
    return send_file(os.path.join('..', 'public', 'index.html'))


@app.route("/dashboard")
@login_required
def dashboard():
    return send_file(os.path.join('..', 'public', 'index.html'))

@app.route("/vote/results", methods=["GET"])
@login_required
def get_results():
    num_understand = 0
    num_misunderstand = 0
    for v in user_votes.values():
        if v:
            num_misunderstand += 1
        else:
            num_understand += 1
    print(str({'num_understand': num_understand, 'num_misunderstand': num_misunderstand}))
    return jsonify({'num_understand': num_understand, 'num_misunderstand': num_misunderstand}), 200, {'ContentType': 'application/json'}


@app.route("/vote", methods=["POST"])
@login_required
def vote():
    if 'is_confused' not in request.form:
        return jsonify({'success': False}), 404, {'ContentType': 'application/json'}
    is_confused = request.form['is_confused']
    is_confused = is_confused.lower() == 'true'
    user_votes[current_user.id] = is_confused
    print("%s is confused %s" % (current_user.id, is_confused))
    return jsonify({'success': True}), 200, {'ContentType': 'application/json'}


if __name__ == "__main__":
    # socketio.run(app, host='0.0.0.0', port=8000)
    app.run(host='0.0.0.0', port=8000)
    print(current_user)
