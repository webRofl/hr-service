def get_data_with_user(request, user_key='user'):
        return {**request.data, user_key: request.user.id}

