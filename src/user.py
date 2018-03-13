from flask_login import UserMixin


class User(UserMixin):
    __id = 0

    def __init__(self, email):
        self.email = email
        self.id = User.__id
        User.__id += 1


class DefaultUserApi(object):
    def __init__(self):
        self.user_map = {}
        self.email_map = {}

    def get_user(self, user_id: int):
        if type(user_id) is not int:
            user_id = int(user_id)
        if user_id in self.user_map.keys():
            return self.user_map[user_id]
        else:
            return None

    def create_user(self, email: str):
        user = User(email=email)
        self.user_map[user.id] = user
        self.email_map[user.email] = user
        return user