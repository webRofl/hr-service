# data is request.data
# exceptions is list of string
def unwrap_formdata_string(data, exceptions = None):
    for key in data:
        value = data[key]
        if isinstance(value, list):
            if exceptions == None:
                data[key] = value[0]
                continue
            if key not in exceptions:
                data[key] = value[0]

    return data
