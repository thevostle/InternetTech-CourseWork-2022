import email


class User:
    id = 0
    name = ''
    email = ''
    password = ''

    def __init__(self, id, name, email, password):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
