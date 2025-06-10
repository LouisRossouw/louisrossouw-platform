
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from .decorators import decorator_ping_me


# @decorator_stats
def stats(request):
    # TODO

    data = {
        'active': True,
    }
    return Response(data, status=200)


# @decorator_health
def health(request):
    # TODO
    data = {
        'active': True,
    }

    return Response(data, status=200)


@decorator_ping_me
def ping_me(request):
    """ Ping test """

    if request.method == "GET":

        print('This works!')
        return Response({"data": "Hey!"}, status=status.HTTP_200_OK)

    return Response(status=status.HTTP_401_UNAUTHORIZED)
