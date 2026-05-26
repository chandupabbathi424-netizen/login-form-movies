# Movie Login Form

A simple and elegant login form application with a movie theme. This project demonstrates a clean user interface for user authentication with input validation and form submission handling.

## Overview

This is a beginner-friendly web application featuring a movie-themed login form. Users can enter their name, phone number, and email address to sign in. The application includes HTML for structure, CSS for styling, and JavaScript for form handling and validation.

## Features

- 🎬 **Movie-Themed Design** - Eye-catching movie image background
- 📝 **User Input Fields** - Username, phone number, and email input fields
- ✅ **Form Validation** - JavaScript-based form validation
- 📱 **Responsive Layout** - Works across different screen sizes
- 🎨 **Modern Styling** - Clean and intuitive user interface

## Project Structure

```
login-form-movies/
├── index.html      # Main HTML file with form structure
├── style.css       # CSS styling and layout
├── script.js       # JavaScript for form handling and validation
└── README.md       # Project documentation
```

## Files Description

### index.html
The main HTML file that contains:
- Document structure and metadata
- Movie image container
- Login form with three input fields:
  - **Username**: Text input for user name
  - **Number**: Numeric input for phone number
  - **Email**: Email input for user email address
- Submit button to trigger form submission
- Links to external CSS and JavaScript files

### style.css
Styling file that includes:
- Container and layout styles
- Form styling and input field formatting
- Button styling and hover effects
- Responsive design elements
- Color scheme and typography

### script.js
JavaScript file containing:
- Form submission event handling
- Input validation logic
- User feedback and error handling
- Data processing before submission

## How to Use

1. **Clone or Download** the repository to your local machine
2. **Open** the `index.html` file in a web browser
3. **Fill in** the form fields:
   - Enter your name in the "Enter Name" field
   - Enter your phone number in the "Enter Number" field
   - Enter your email address in the "Enter Email" field
4. **Click** the "Sign In" button to submit the form
5. The form will be validated and processed by the JavaScript code

## Technologies Used

- **HTML5** - For semantic markup and form structure
- **CSS3** - For styling and layout
- **JavaScript (ES6)** - For form handling and validation
- **Unsplash API** - For the movie background image

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No server-side setup required (runs entirely in the browser)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chandupabbathi424-netizen/login-form-movies.git
```

2. Navigate to the project directory:
```bash
cd login-form-movies
```

3. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a local server (recommended for development):
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Form Fields

| Field | Type | Placeholder | Validation |
|-------|------|-------------|-----------|
| Username | Text | Enter Name | Required, non-empty |
| Number | Number | Enter Number | Required, numeric only |
| Email | Email | Enter Email | Required, valid email format |

## Future Enhancements

- Add password field for actual authentication
- Implement backend integration for user data storage
- Add more form validation rules
- Create a success/error message display
- Add user feedback animations
- Implement remember me functionality
- Add forgot password option
- Create user dashboard after login

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## License

This project is open source and available for personal and educational use.

## Author

**chandupabbathi424-netizen**

## Contributing

Contributions are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests with improvements

## Notes

- This is a frontend-only application (no backend server required)
- Form data is currently handled on the client-side only
- For production use, implement proper backend authentication and data storage
- Ensure proper security measures for handling sensitive user data

---

**Last Updated:** May 26, 2026

For more information or questions, please open an issue in the repository.
