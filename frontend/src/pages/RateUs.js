// src/pages/RateUs.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RateUs.css';

const RateUs = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]); // State to store fetched reviews

  // Fetch reviews from the backend when the component loads
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data); // Set the reviews state with fetched data
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews. Please try again later.');
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const username = localStorage.getItem('username'); // Retrieve the username from localStorage

    if (!username) {
        setError('You must be logged in to post a review.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/api/reviews', {
            username, // Include username
            rating,
            review,
        });

        alert(`Thank you for your rating of ${rating} stars! Your review: "${review}"`);
        setRating(0);
        setReview('');
        setReviews([...reviews, response.data]); // Add new review to the existing list
    } catch (err) {
        console.error('Error submitting review:', err);
        setError(err.response?.data?.message || 'Something went wrong, please try again later.');
    }
};

  return (
    <div className="rateus-container">
      <h2>Rate Us</h2>
      {error && <div className="error">{error}</div>}
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <span
              key={starValue}
              className={`star ${starValue <= (hover || rating) ? "filled" : ""}`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(rating)}
            >
              ★
            </span>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button type="submit">Submit</button>

        {/* Display existing reviews */}
        <div className="reviews-list">
          <h3>What others are saying:</h3>
          {reviews.length > 0 ? (
            reviews.map((rev) => (
              <div key={rev._id} className="review-item">
                <p><strong>{rev.userId.username}</strong> rated {rev.rating} stars</p>
                <p>{rev.review}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to rate us!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default RateUs;
