# AI Explainability Grader - Web Version

## Overview

The AI Explainability Grader is a browser-based tool that evaluates how well AI models explain complex concepts in simple terms. This web application allows users to grade AI responses based on specific criteria, generate reports, and submit results to a shared dataset.

## Features

- **No Installation Required**: Runs directly in your web browser.
- **User-friendly Interface**: Responsive design for desktop and mobile devices.
- **Standardized Evaluation**: Consistent criteria for benchmarking AI models.
- **Report Generation**: Creates markdown reports of evaluations.
- **Class Data Collection**: Submit results to a centralized Google Sheet.

## Getting Started

### Quick Setup

1. **Download the Files**:
   - `index.html` - Main HTML file.
   - `styles.css` - CSS styling.
   - `script.js` - JavaScript functionality.

2. **Open in Browser**:
   - Open the `index.html` file in any modern web browser.
   - No server required; works locally.

### Alternative: Access Online

If hosted online, use the provided URL to access the grader.

## How to Use

### Evaluation Process

1. **Enter AI Model Information**:
   - AI Model Name (e.g., ChatGPT, Claude, Gemini).
   - Your name or identifier (optional).
   - Original "Explain like I'm 12" prompt.
   - The AI's complete response.

2. **Rate Each Criterion** (1-10 scale):
   - **Simplicity of Language** (25%): Simple vocabulary and structure.
   - **Clarity of Explanation** (25%): Logical and easy-to-follow.
   - **Relatable Examples** (20%): Use of examples or analogies.
   - **Avoidance of Jargon** (15%): No unexplained technical terms.
   - **Engagement Factor** (15%): Interesting and engaging.

3. **Generate Results**:
   - Click "Grade Response" for the overall score and feedback.
   - Click "Generate Report" for a markdown report.
   - Click "Submit to Class Results" to add your evaluation to the dataset.

### Report Options

- **Copy to Clipboard**: Copy the markdown report.
- **Download Report**: Save the report as a markdown file.

## Data Collection

The "Submit to Class Results" button sends your evaluation data to a Google Form, which:
1. Records your ratings and feedback in a central spreadsheet.
2. Enables analysis of AI model performance.
3. Allows comparison across evaluation criteria.
4. Creates a dataset for understanding AI explainability.

## Suggested Topics

Example topics to evaluate:
- Quantum computing
- Photosynthesis
- How the internet works
- Climate change
- Black holes
- Blockchain technology
- How vaccines work

## Troubleshooting

- **Blank Form**: Shorten your response text if the form opens blank.
- **Copy Function Not Working**: Manually copy text (Ctrl+C/Cmd+C).
- **Display Issues**: Try another browser or device.

## Browser Compatibility

Best supported on:
- Chrome (version 89+)
- Firefox (version 87+)
- Edge (version 89+)
- Safari (version 14+)

## Customization

1. **Change Criteria**: Edit the `criteria` object in `script.js`.
2. **Change Styling**: Modify the `styles.css` file.
3. **Update Form Link**: Replace the Google Form ID in the `submitToClassResults()` function.

## Privacy Notice

- Data is submitted through Google Forms.
- No data is stored locally except during the current session.
- Instructors have access to submitted evaluations.

## Contributing

Have suggestions? Submit pull requests to the GitHub repository or contact your instructor.

---

*This project benchmarks AI models on their ability to explain complex topics in simple language. For questions, contact your instructor.*
