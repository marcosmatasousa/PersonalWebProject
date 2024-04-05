from flask import Flask, request, send_file, send_from_directory, render_template
import json
import os
  
app = Flask(__name__)

@app.route('/')
def return_index():
    return send_file('index.html', mimetype='html')

@app.route('/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('css', filename)

@app.route('/<path:filename>')
def serve_html(filename):
    return send_from_directory('.', filename)

@app.route('/static')
def serve_static(path):
    return send_from_directory('static', path)

# Lidar com solicitações POST
@app.route('/', methods=['POST'])
def handle_request():
    return 'ok'

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)