def unwrap_formdata_string(data): # data is request.data
    for key in data:
        value = data[key]
        print(key, value, isinstance(value, list))
        if isinstance(value, list):
            data[key] = value[0]

    return data
