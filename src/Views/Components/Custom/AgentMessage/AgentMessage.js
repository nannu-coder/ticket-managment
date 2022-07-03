import React from "react";
import agent from "../../../../Assets/agent.png";
import "./AgentMessage.css";

const AgentMessage = () => {
  return (
    <>
      <div className="agent--message--part">
        <div className="agent-message__heading">
          <h3>Recent Message</h3>
        </div>
        <div className="agent--message--part__container">
          <div className="agent--message--part--img">
            <img
              className="agent--message--part--img--image"
              src={agent}
              alt="Agent"
            />
          </div>
          <div className="agent--message--part--content">
            <div className="agent--message--part--content--header">
              <h3 className="agent--message--part--content--header-heading">
                Alexzender Burt
              </h3>
              <small className="agent--message--part--content-time">
                2:44PM
              </small>
            </div>
            <div className="agent--message--part--content--body">
              <p className="agent--message--part--content--body-head">
                Web Development
              </p>
              <p className="agent--message--part--content--body-detail">
                It was popularised in the 1960s with
              </p>
            </div>
          </div>
        </div>
        <hr style={{ margin: 0 }} />
        <div className="agent--message--part__container">
          <div className="agent--message--part--img">
            <img
              className="agent--message--part--img--image"
              src={agent}
              alt="Agent"
            />
          </div>
          <div className="agent--message--part--content">
            <div className="agent--message--part--content--header">
              <h3 className="agent--message--part--content--header-heading">
                Alexzender Burt
              </h3>
              <small className="agent--message--part--content-time">
                2:44PM
              </small>
            </div>
            <div className="agent--message--part--content--body">
              <p className="agent--message--part--content--body-head">
                Web Development
              </p>
              <p className="agent--message--part--content--body-detail">
                It was popularised in the 1960s with
              </p>
            </div>
          </div>
        </div>
        <hr style={{ margin: 0 }} />
        <div className="agent--message--part__container">
          <div className="agent--message--part--img">
            <img
              className="agent--message--part--img--image"
              src={agent}
              alt="Agent"
            />
          </div>
          <div className="agent--message--part--content">
            <div className="agent--message--part--content--header">
              <h3 className="agent--message--part--content--header-heading">
                Alexzender Burt
              </h3>
              <small className="agent--message--part--content-time">
                2:44PM
              </small>
            </div>
            <div className="agent--message--part--content--body">
              <p className="agent--message--part--content--body-head">
                Web Development
              </p>
              <p className="agent--message--part--content--body-detail">
                It was popularised in the 1960s with
              </p>
            </div>
          </div>
        </div>
        <hr style={{ margin: 0 }} />
        <div className="agent--message--part__container">
          <div className="agent--message--part--img">
            <img
              className="agent--message--part--img--image"
              src={agent}
              alt="Agent"
            />
          </div>
          <div className="agent--message--part--content">
            <div className="agent--message--part--content--header">
              <h3 className="agent--message--part--content--header-heading">
                Alexzender Burt
              </h3>
              <small className="agent--message--part--content-time">
                2:44PM
              </small>
            </div>
            <div className="agent--message--part--content--body">
              <p className="agent--message--part--content--body-head">
                Web Development
              </p>
              <p className="agent--message--part--content--body-detail">
                It was popularised in the 1960s with
              </p>
            </div>
          </div>
        </div>
        <hr style={{ margin: 0 }} />
      </div>
    </>
  );
};

export default AgentMessage;
