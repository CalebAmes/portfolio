import { useState } from "react";
import socket from "../../services/socket";
import "./ChatComponent.scss";

const ChatComponent = ({ message, channelId = 1, currentUserId = 1 }) => {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState(false);
  const [messageEditor, setMessageEditor] = useState(false);
  const [hover, setHover] = useState(false);

  const user = message.User;
  let messageImg;

  const closeCard = async () => {
    setCard(!card);
  };

  const deleteChannelMessage = async channelMessageId => {
    const res = await fetch(
      `https://shrewdness.herokuapp.com/api/channelMessages/${channelMessageId}/delete`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: channelMessageId
        })
      }
    );
    return res;
  };

  const deleteMessage = async id => {
    await deleteChannelMessage(id);
    socket.emit("edit", channelId);
  };

  const updateChannelMessage = async (newMessage, id) => {
    const res = await fetch(
      `https://shrewdness.herokuapp.com/api/channelMessages/update`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          messageText: newMessage
        })
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  };

  const editMessage = async (newMessage, id) => {
    if (newMessage !== message.messageText) {
      updateChannelMessage(newMessage, id).then(() =>
        socket.emit("edit", channelId)
      );
    }
    setMessageEditor(!messageEditor);
  };

  const EditMessage = ({ func }) => {
    const [value, setValue] = useState(message.messageText);
    const keyPress = e => {
      if (e.key === "Enter") {
        e.preventDefault();
        func(value, message.id);
        setHover(false);
      }
    };
    return (
      <div className="editMessageInputDiv">
        <textarea
          maxLength="140"
          onChange={e => setValue(e.target.value)}
          onKeyPress={keyPress}
          value={value}
          className="messageInputTextarea"
        >
          {value}
        </textarea>
      </div>
    );
  };

  if (message.messageImg) messageImg = message.messageImg;

  return (
    <>
      <div
        className="chatComponentDiv"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={!messageEditor ? () => setHover(false) : () => {}}
      >
        <div className="post">
          <img
            src={user?.avatar}
            alt="user avatar"
            className="avatar"
            onClick={closeCard}
          />
          <div className="postMessage">
            <div className="postInfo">
              <div className="messageOrigin" onClick={closeCard}>
                {user?.username}
              </div>
              <div className="messageTime">
                {message.createdAt === message.updatedAt && (
                  <p>{message.updatedAt}</p>
                )}
                {message.createdAt !== message.updatedAt && (
                  <p>edited at {message.updatedAt}</p>
                )}
              </div>
              {user?.id === currentUserId &&
                hover && (
                  <div className="editMessage">
                    <div
                      className="deleteMessageButton"
                      onClick={() => deleteMessage(message.id)}
                    >
                      <i className="fas fa-trash-alt" />
                    </div>
                    <div
                      className="editMessageButton"
                      onClick={() => editMessage()}
                    >
                      <i className="fas fa-edit" />
                    </div>
                  </div>
                )}
            </div>
            {!messageEditor && (
              <>
                <div className="messageText">
                  <p>{message.messageText}</p>
                </div>
                <div className="messageImgDiv">
                  {messageImg && (
                    <>
                      <div className="divImage" onClick={() => setOpen(!open)}>
                        <img
                          src={messageImg}
                          alt="sent in chat"
                          className="messageImg"
                        />
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
            {messageEditor && <EditMessage func={editMessage} />}
          </div>
        </div>
      </div>
      {open && (
        <>
          <div className="modal">
            <div className="modal-background" onClick={() => setOpen(!open)} />
            <img
              src={messageImg}
              alt="sent in chat, enlarged"
              className="modal-content"
            />
          </div>
        </>
      )}
    </>
  );
};

export default ChatComponent;
