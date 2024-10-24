import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { RxCross2 } from "react-icons/rx";
import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PermotionModels({
  handleClickOpen,
  open,
  setOpen,
}: any) {
  const handleClose = () => {
    setOpen(false);
  };
  const [type, setType] = React.useState("comment");

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        className="z-[100000]"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "0px", // Custom border radius
            width: { xs: "100%", md: "400px" },
            height: { xs: "100vh", md: "90vh" },
            maxHeight: "100%",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            margin: 0,
          },
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-cente border-b p-3 sticky top-0 z-20 bg-white">
            <div className="flex items-center md:gap-4 gap-3 text-sm">
              <button className="flex items-center gap-1 text-gray-600 hover:text-black">
                <BiSolidLike size={16} />
                <span>Like</span>
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-black">
                <FaCommentDots size={14.5} onClick={() => setType("comment")} />
                <span>Comments</span>
              </button>
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-black"
                onClick={() => setType("promotion")}
              >
                <GrAnnounce size={15} />
                <span>Promotion</span>
              </button>
            </div>
            <button onClick={handleClose} className="text-black text-lg">
              <RxCross2 />
            </button>
          </div>
          <Chat/>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const Chat = () => {
    const [messages, setMessages] = React.useState([
      { user: "User 1", text: "Hello!", time: getCurrentTime(), image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
      { user: "User 2", text: "Hi! How are you?", time: getCurrentTime(), image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" },
    ]);
    const [input, setInput] = React.useState("");
  
    const handleSend = () => {
      if (input.trim() !== "") {
        const newMessage = {
          user: "You",
          text: input,
          time: getCurrentTime(),  // Add the current time when sending the message
          image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // Placeholder image for the user avatar
        };
        setMessages([...messages, newMessage]);
        setInput(""); // Clear the input field after sending the message
      }
    };
  
    return (
      <div className="text-sm h-full flex flex-col justify-between">
        {/* Chat messages */}
        <div className="p-4 flex-1 bg-gray-100 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center mb-1">
                <img src={message.image} alt={`${message.user} avatar`} className="w-8 h-8 rounded-full mr-3" />
                <p className="">
                  <strong className="text-[13px]">{message.user}</strong> <p className="text-[12px] text-gray-500 -mt-1">{message.time}</p>
                </p>
              </div>
                <p className="text-gray-500">{message.text}</p>
            </div>
          ))}
        </div>
  
        {/* Input and send button */}
        <div className="bg-white">
          <div className="border flex items-center p-1.5 border-gray-300">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="p-2 w-full placeholder:font-normal outline-none border-none text-sm"
              onKeyDown={(e) => e.key === "Enter" && handleSend()} // Send message on pressing Enter
            />
            <button
              className="ml-2 bg-blue-600 text-white py-1.5 px-3 rounded-md"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  };
  