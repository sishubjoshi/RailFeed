import React from 'react'

export default function Test() {
  return (
    <div className="container mt-5">

            <div className="row">


                <input type="button" className="btn btn-success" value="Analyze from Database"/>
                <input type="button" className="btn btn-success" value="Analyze from file" data-toggle="modal" data-target="#addmodal" />
                <div className="modal" id="addmodal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addmodalLabel">Upload Image</h5>
                                    <button type="button" className="close" data-dismiss="modal">X</button>
                            </div>
                            <div className="modal-body">
                                <form action="/" method="POST" encType="multipart/form-data" className="form-group">
                                      <input type="file" name="file" accept="image/*" multiple />
                                      <button type="submit" className="btn btn-outline-success">Check <i className="fas fa-angle-double-right"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
    </div>
  )
}
