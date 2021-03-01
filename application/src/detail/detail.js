// displaing selected beer details

import React from "react";
import "../css/modal.css";

const Modal = (props) => (
  <>
    {props.modalActive ? (
      <div className="modal-overlay" onClick={props.modal}>
        <div className="modal-window">
          <div className="modal-header">
            <div className="modal-title">Beer details</div>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={props.modal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <div className="mb-wrapper">
              <div className="description-wrapper">
                <h1 className="modal-title">
                  <strong>{props.moreData.name}</strong>
                </h1>
                <h3>{props.moreData.tagline}</h3>
                <div className="spacer10"></div>
                <div className="d-inline-block">
                  <strong>ABV:</strong>&nbsp;{props.moreData.abv}
                </div>
                <div className="spacerleft30"></div>
                <div className="d-inline-block">
                  <strong>Date first brewed:</strong>&nbsp;
                  {props.moreData.first_brewed}
                </div>
                <div className="spacer10"></div>
                <p>
                  <strong>Description:</strong>
                  <br />
                  {props.moreData.description}
                </p>
                <p>
                  <strong>Brewer's tips:</strong>&nbsp;
                  {props.moreData.brewers_tips}
                </p>
              </div>

              <img
                src={props.moreData.image_url}
                className="img-detail"
                alt={props.moreData.name}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.modal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null}
  </>
);

export default Modal;
