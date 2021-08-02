import { Card, Typography, CardContent } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ message, username, index}) {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && "message__user"} `}>
      <Card className={isUser ? "message__userCard": "message__guestCard"}>
        <CardContent>
          <Typography
            color="white"
            variant="h5"
            component="h2"
            key={index}
          >
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
      <h2></h2>
    </div>
  );
}

export default Message;
