def serializer_lifecycle(serializer, data, **kwargs):
    serializer = serializer(data=data, **kwargs)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return serializer