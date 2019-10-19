from database.base import db_session
from flask import Flask, request
from flask_graphql import GraphQLView
from schema import schema, Query
import string
import secrets
#path looks like /graphql?
#Arguments are the path followed by a ?. For multiple args follow it by an &
app = Flask(__name__)
app.add_url_rule(
	'/graphql',
	view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

def shutdown_session(exception=None):
    db_session.remove()

@app.route('/test', methods=['GET'])
#for args the url is:
#address/func_name?arg=arg
#the first arg is a variable with a value of arg
#full url: address/test?name=name
@app.route('/test', methods=['GET'])
def returnhi(exception=None):
	if 'name' in request.args:
		return "Hello World, "
 
@app.route('/generate_password', methods=['GET'])
def generate_password():
	length = 10
	alphabet = string.ascii_letters + string.digits
	password = ''.join(secrets.choice(alphabet) for i in range(length))
	return password

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=8080)
    #app.run(debug=True)
