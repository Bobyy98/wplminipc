// Signin.js
import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; 
import './Signin.css';
import axios from 'axios'; // Import axios for API requests

const Signin = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    
    const [phoneError, setPhoneError] = useState('');
    const [error, setError] = useState(''); // Error for form submission
    const [successMessage, setSuccessMessage] = useState(''); // Success message

    // Function to handle input changes and update form data
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle phone number validation (allow only numeric input)
    const handlePhoneInput = (e) => {
        const input = e.target.value;
        // Regular expression to allow only numbers
        const numericInput = input.replace(/\D/g, '');
        setFormData({ ...formData, phone: numericInput }); // Update phone in formData
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, username, email, phone, password, confirmPassword } = formData;

        // Clear previous errors and success messages
        setPhoneError('');
        setError('');
        setSuccessMessage('');

        // Validate phone number length
        if (phone.length !== 10) {
            setPhoneError('Phone number must be exactly 10 digits');
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Send form data to backend API using axios
            const response = await axios.post('http://localhost:5000/api/auth/signin', {
                fullName,
                username,
                email,
                phone,
                password
            });
            console.log('User registered:', response.data);
            setSuccessMessage(response.data.message); // Set success message if registration is successful
            setError(''); // Clear error if successful
        } catch (err) {
            console.error('Error during registration:', err.response || err);
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <>
        <div className="signin-background">
            <div className="signin-form">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signin-form-row">
                        <div className="signin-form-group">
                            <label htmlFor="full-name"><i className="fas fa-user"></i> Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="signin-form-group">
                            <label htmlFor="username"><i className="fas fa-user"></i> Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="signin-form-row">
                        <div className="signin-form-group">
                            <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="signin-form-group">
                            <label htmlFor="phone"><i className="fas fa-phone"></i> Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                required
                                onInput={handlePhoneInput} // Handle phone validation
                            />
                            {/* Display error message if the phone number is invalid */}
                            {phoneError && <p className="error-message">{phoneError}</p>}
                        </div>
                    </div>
                    <div className="signin-form-row">
                        <div className="signin-form-group">
                            <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="signin-form-group">
                            <label htmlFor="confirm-password"><i className="fas fa-lock"></i> Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    {/* Display error message if passwords do not match */}
                    {error && <p className="error-message">{error}</p>}
                    {/* Display success message if registration is successful */}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <div className="signin-form-row-bottom">
                        <input type="checkbox" id="declaration" name="declaration" required />
                        <label htmlFor="declaration" className="signin-declaration-label">
                            I hereby declare that the above information provided is true and correct
                        </label>
                    </div>
                    <div className="signin-form-row-button">
                        <button type="submit" className='signin-button'>Register</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Signin;
