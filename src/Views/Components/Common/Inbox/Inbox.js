import React from "react";
import profile from "../../../../Assets/profile-pic.png";
import msg1 from "../../../../Assets/msg1.png";
import msg2 from "../../../../Assets/msg2.png";
import msg3 from "../../../../Assets/msg3.png";
import { GrAttachment } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Inbox.css";

const Inbox = () => {
  return (
    <>
      <div style={{ padding: "12px" }} className="message-part">
        <div className="message-heading">
          <h2 className="message-heading--title">
            Website Bug Issue Plz Help Me
          </h2>
        </div>
        <div className="message-details">
          <div className="mesage-profile">
            <img className="inbox-profile--img" src={profile} alt="" />
            <p className="userName">Shamim Al Hasan</p>
          </div>
          <p className="message__header__text">
            Problem Type : Web Development
          </p>
          <p className="message__header__text">Priority : High</p>
          <p className="message__header__text">ID : #785</p>
        </div>
      </div>
      <hr style={{ margin: 0 }} />
      <div style={{ padding: "12px" }} className="message--inbox">
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="bug-fixing-inbox-start"
        >
          <div
            style={{ display: "flex" }}
            className="bug-fixing-inbox-receive__message"
          >
            <div className="bug-fixing-inbox-receive__message--img">
              <img className="inbox-profile--img" src={profile} alt="" />
            </div>
            <div className="bug-fixing-inbox-receive__message--text">
              <div className="bug-fixing-inbox-receive__message--text__one">
                <p className="bugFixing--font">
                  It has survived five centuries, but also the leap
                </p>
                <small>2:44 PM</small>
              </div>
              <div className="bug-fixing-inbox-receive__message--text__two">
                <p className="bugFixing--font">
                  only five centuries, but also the leap
                </p>
                <small>2:44 PM</small>
              </div>
            </div>
          </div>
          <div className="bug-fixing-inbox-outgoing__message">
            <div className="bug-fixing-inbox-outgoing__message--border-down">
              <p className="bugFixing--font outgoing--font">
                It has survived only five centuries but also the leap
              </p>
              <small>2:44 PM</small>
            </div>
          </div>

          <div
            style={{ display: "flex" }}
            className="bug-fixing-inbox-receive__message"
          >
            <div className="bug-fixing-inbox-receive__message--img">
              <img className="inbox-profile--img" src={profile} alt="" />
            </div>
            <div className="bug-fixing-inbox-receive__message--text">
              <div className="bug-fixing-inbox-receive__message--text__one">
                <p className="bugFixing--font">
                  only five centuries, but also the leap
                </p>
                <small>2:44 PM</small>
              </div>
              <div className="bug-fixing-inbox-receive__message--text__two">
                <p className="bugFixing--font">
                  only five centuries, but also the leap
                </p>
                <div className="bug-fixing-inbox-receive__message__img">
                  <img className="msg--img" src={msg1} alt="" />
                  <img className="msg--img" src={msg2} alt="" />
                  <img className="msg--img" src={msg3} alt="" />
                </div>
                <small>2:44 PM</small>
              </div>
            </div>
          </div>

          <div className="bug-fixing-inbox-outgoing__message">
            <div className="bug-fixing-inbox-outgoing__message--border-down">
              <p className="bugFixing--font outgoing--font">Its very good</p>
              <small>2:44 PM</small>
            </div>
          </div>

          <div
            style={{ display: "flex" }}
            className="bug-fixing-inbox-receive__message"
          >
            <div className="bug-fixing-inbox-receive__message--img">
              <img className="inbox-profile--img" src={profile} alt="" />
            </div>
            <div className="bug-fixing-inbox-receive__message--text">
              <div className="bug-fixing-inbox-receive__message--text__one">
                <p className="bugFixing--font">Thank you</p>
                <small>2:44 PM</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ margin: 0 }} />
      <div style={{ padding: "12px" }} className="message-send--options">
        <form action="#">
          <div className="inbox--box">
            <div className="message-send--options-left">
              <IconContext.Provider value={{ className: "inbox-icon" }}>
                <GrAttachment />
              </IconContext.Provider>

              <IconContext.Provider value={{ className: "inbox-icon" }}>
                <BsEmojiSmile />
              </IconContext.Provider>

              <textarea
                className="message-send--options--middle--input"
                cols="60"
                rows="1"
                placeholder="Type a message here..."
              ></textarea>
            </div>
            <div className="message-send--options--right">
              <button className="message-send--option-btn">
                <IconContext.Provider value={{ className: "msg_send__icon" }}>
                  <FaRegPaperPlane />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inbox;
