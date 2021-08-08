# https://learn.freecodecamp.org/apis-and-microservices/basic-node-and-express/use-the--env-file

The .envfile is a hidden file that is used to pass environment variables to your application. This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options. By setting configuration options, you can change the behavior of your application, without the need to rewrite some code.

The environment variables are accessible from the app as process.env.VAR_NAME. The process.envobject is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The .envis a shell file, so you don’t need to wrap names or values in quotes. It is also important to note that there cannot be space around the equals sign when you are assigning values to your variables, e.g. VAR_NAME=value. Usually, you will put each variable definition on a separate line.

Let's add an environment variable as a configuration option. Store the variable MESSAGE_STYLE=uppercasein the .envfile. Then tell the GET /jsonroute handler that you created in the last challenge to transform the response object’s message to uppercase if process.env.MESSAGE_STYLEequals uppercase. The response object should become {"message": "HELLO JSON"}.

Location of same code for Glitch: https://broad-band.glitch.me/

Edit mode: https://glitch.com/edit/#!/broad-band

Note: this is for FCC Submission
