from flask import Response, render_template, jsonify, send_file, send_from_directory, Flask
from flask_socketio import emit, SocketIO
import os

app = Flask(__name__,
            static_url_path='',
            static_folder='../public/')

socketio = SocketIO(app)



@app.route("/")
def hello():
    return send_file(os.path.join('..', 'public', 'index.html'))


if __name__ == "__main__":
    socketio.run(app, host='0.0.0.0', port=8000)
