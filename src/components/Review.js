import React, { Component } from 'react';

class Review extends Component{

  state = {
    review:'',
    category:''
  }

  handleInput(e) {
    console.log('hh');
    this.setState({review: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch(`https://railfeed.herokuapp.com/review/${this.state.review}`)
    .then(res => res.json())
    .then(data => this.setState({category: data.msg}))
    .catch(err => console.log(err))
  }
  render() {
    const { category } = this.state;
  return (
      <div className="Review container">
        <h2 className="review-header">Testing Ground</h2>
      <form className="review-form mx-auto" onSubmit={(e) => this.handleSubmit(e)}>
            <textarea className="form-control review-input" rows="4" value = {this.state.review} onChange = {(e) => this.handleInput(e)}/>

            <div className="text-center mt-3">
                <input type="submit" className="btn btn-success btn-block" value="Analyze" />
            </div>
            
      </form>

      {this.state.category ? (
        <div className="card card-body mt-3 bg-danger">
        <p className="text-white h3">Category: {category}</p>
        </div>
      ) : (<p></p>)}
      
    </div>
  )
}

}

export default Review;