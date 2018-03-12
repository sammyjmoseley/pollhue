from flask_login import UserMixin

class User(UserMixin):
    def __init__(self):
        self.first_name = 'Sammy'
        self.id = 1


class DefaultUserApi(object):
    def __init__(self):
        self.user_map = {1: User()}

    def get_user(self, user_id: int):
        if type(user_id) is not int:
            user_id = int(user_id)
        if user_id in self.user_map.keys():
            return self.user_map[user_id]
        else:
            return None
