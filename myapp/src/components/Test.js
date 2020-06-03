import React, { Component } from 'react';
import request from 'superagent';
import { Redirect } from 'react-router-dom';
// import $ from 'jquery';

class Test extends Component {
	state = {
		review: {},
		file: false
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// action="https://railfeed.herokuapp.com/upload"
		let data = new FormData();
		const imagedata = document.querySelector('input[type="file"]').files[0];
		data.append('file', imagedata);

		var req = request.post('https://railfeed.herokuapp.com/upload').send(data);
		req.end((err, response) => {
			console.log('upload done!!!!!');
			this.setState({ review: response.body, file: true });
			document.getElementById('close_modal').click();
			console.log(response.body.others.length);
		});
		// $('#addmodal').modal('hide');

		// eturn <Redirect to="https://railfeed.herokuapp.com/getfile.csv" />
	};

	render() {
		return (
			<div className="container mt-5 ">
				<div className="row">
					<input type="button" className="btn btn-success" value="Analyze from Database" />
					<input
						type="button"
						className="btn btn-success"
						value="Analyze from file"
						data-toggle="modal"
						data-target="#addmodal"
					/>
					<div className="modal" id="addmodal">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="addmodalLabel">
										Upload Image
									</h5>
									<button type="button" className="close" data-dismiss="modal" id="close_modal">
										X
									</button>
								</div>
								<div className="modal-body">
									<form className="form-group" onSubmit={(e) => this.handleSubmit(e)}>
										<input type="file" name="filename" />
										<button type="submit" className="btn btn-outline-success">
											Check <i className="fas fa-angle-double-right" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				{this.state.file ? (
					<a
						href="https://railfeed.herokuapp.com/getFile.csv"
						type="button"
						className="btn btn-success"
						target="_blank"
						value="Download"
					>
						Download File
					</a>
				) : (
					<p />
				)}
			</div>
		);
	}
}

export default Test;
