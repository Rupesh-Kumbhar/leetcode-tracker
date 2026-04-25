import React, { useState } from "react";
import './problemTable.scss';

const ProblemTable = () => {
    // 1. Create a state to track visibility
    const [showModal, setShowModal] = useState(false);

    return (
      <div className="col-sm-12 p-0">
        {/* ... your table code ... */}
        <div className="col-sm-12 d-flex justify-content-center">
          <div className="col-sm-10 ">
            <table className="table table table-dark table-hover problem-table">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Problem</th>
                  <th scope="col">In progress</th>
                  <th scope="col">Complete</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <a
                      href="https://www.geeksforgeeks.org/problems/odd-or-even3618/1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Odd-or-even
                    </a>
                  </td>
                  <td> - </td>
                  <td>complete</td>
                  <td>
                    <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)} >Add notes</button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>
                    <a
                      href="https://www.geeksforgeeks.org/problems/print-table0303/1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Multiplication Table
                    </a>
                  </td>
                  <td> - </td>
                  <td>complete</td>
                  <td>
                    <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)} >Add notes</button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>
                    <a
                      href="https://www.geeksforgeeks.org/problems/reverse-coding2452/1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sum of Naturals
                    </a>
                  </td>
                  <td> - </td>
                  <td>complete</td>
                  <td>
                    <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)} >Add notes</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    <a
                      href="https://www.geeksforgeeks.org/problems/sum-of-squares-of-first-n-natural-numbers/1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sum of Squares
                    </a>
                  </td>
                  <td> - </td>
                  <td>complete</td>
                  <td>
                    <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)} >Add notes</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-sm-12 p-0">
          {/* 2. Toggle state on click */}
          

          {/* 3. Use conditional CSS classes */}
          <div
            className={`modal fade ${showModal ? "show d-block" : ""}`}
            style={{
              backgroundColor: showModal ? "rgba(0,0,0,0.5)" : "transparent",
            }}
            tabIndex="-1"
          >
            <div class="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Notes</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                    <div class="form-floating">
                      <textarea class="form-control" placeholder="Leave a Note here" id="floatingTextarea2"></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProblemTable;