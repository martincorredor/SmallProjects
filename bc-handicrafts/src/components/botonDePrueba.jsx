import React, { Component } from "react";

class Ejemplo extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <div>
        <div className="col-md-6  mb-2">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            {/* Este es el boton 1 */}
            <button
              type="button"
              id="btn-nquote"
              className="btn btn-success btn-sm"
              onClick={() => this.handleChange(false)}
            >
              Normal Quote
            </button>

            {/* Este es el boton 2 */}
            <button
              type="button"
              id="btn-flex"
              className="btn btn-unique btn-sm"
              onClick={() => this.handleChange(true)}
            >
              Flex Quote
            </button>
          </div>
        </div>
        <span>
          {this.state.checked ? (
            <div /* Este es el div 1 */ className="redd">primer div</div>
          ) : (
            <div /* Este es el div 2 */ className="red2">segundo div</div>
          )}
        </span>


      </div>
    );
  }
}

export default Ejemplo;