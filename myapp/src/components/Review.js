import React from 'react'

const Review = () => {
  return (
    <div className="Review container">
        <h2 className="review-header">Testing Ground</h2>
      <form className="review-form mx-auto">
            <textarea className="form-control review-input" rows="4" />

            <div className="text-center mt-3">
                <input type="submit" className="btn btn-success btn-block" value="Analyze" />
            </div>
            
      </form>
    </div>
  )
}

export default Review;