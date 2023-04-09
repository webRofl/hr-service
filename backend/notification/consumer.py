import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer

class NotificationConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.room_group_name = self.scope["user"].username

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name,
        )
        await self.accept()

    async def receive(self, text_data=None, bytes_data=None):
        if isinstance(text_data, dict) != True:
            text_data = json.loads(text_data)

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "send_notification",
                "message": text_data["message"],
            }
        )
    
    async def send_notification(self, event):
        msg = json.dumps({
            "message": event["message"],
            "room_name": self.room_group_name,
            "channel_name": self.channel_name,
        })
        await self.send(msg)

    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_layer,
        )
