# AI Explainability Grader

## Overview
The AI Explainability Grader is a tool designed to evaluate how well different AI models can explain complex concepts in simple terms that a 12-year-old could understand. This application allows you to grade AI responses based on specific criteria and generate comprehensive reports.

## Purpose
This tool helps benchmark different AI models based on their ability to:
- Use simple, age-appropriate language
- Provide clear explanations
- Use relatable examples
- Avoid technical jargon
- Create engaging content for young audiences

## How It Works

### For Students
1. Choose an AI model to evaluate (e.g., ChatGPT, Claude, Gemini)
2. Ask the AI to "Explain [complex topic] like I'm 12 years old"
3. Copy the AI's response into the application
4. Grade the response based on the provided criteria
5. Generate a standardized report of your evaluation
6. Submit your grading report to be averaged with other students' evaluations

### Grading Process
The application uses five key criteria to evaluate AI responses:
- **Simplicity of Language** (25%): Simple vocabulary and sentence structure
- **Clarity of Explanation** (25%): Logical flow and easy-to-follow explanations
- **Relatable Examples** (20%): Use of concrete examples, analogies or metaphors
- **Avoidance of Jargon** (15%): No unexplained technical terms
- **Engagement Factor** (15%): How interesting and engaging the explanation is

## Project Structure
```
aiGrading
├── aiGrader.py          # Core grading functionality
├── gui                  # GUI components
│   ├── __init__.py
│   ├── app.py           # Main entry point for the GUI application
│   ├── components       # GUI components
│   │   ├── __init__.py
│   │   ├── grading_panel.py  # Handles user input for grading
│   │   └── results_view.py   # Displays grading results
│   └── utils           # Utility functions
│       ├── __init__.py
│       └── helpers.py   # Helper functions for the GUI
├── assets               # Static assets
│   └── styles.css       # CSS styles for the GUI
├── tests                # Test suite
│   ├── __init__.py
│   └── test_grader.py   # Unit tests for grading functionality
├── requirements.txt     # Project dependencies
└── README.md            # Project documentation
```

## Installation
To set up the application:

```bash
git clone <repository-url>
cd aiGrading
pip install -r requirements.txt
```

## Usage

### Starting the Application
Run the application with:

```bash
python aiGrader.py
```

### Step-by-Step Instructions
1. **Enter AI Model Name**: Provide the name of the AI model you're evaluating
2. **Enter Your Prompt**: Type or paste the original "Explain like I'm 12" prompt you gave to the AI
3. **Enter AI Response**: Copy and paste the AI's complete response
4. **Rate Each Criterion**: Use the sliders to rate how well the AI met each criterion (1-10)
5. **Grade Response**: Click the "Grade Response" button to calculate the overall score
6. **Generate Report**: Click the "Generate Report" button to create a detailed markdown report

### Results Collection
All student gradings will be collected and averaged to create:
- Overall rankings of different AI models
- Detailed analysis of strengths and weaknesses by criterion
- Insights into which AI models are best at simplifying complex information

## Data Collection and Analysis

All submissions through the "Submit to Class Results" button are:
1. Collected in a central Google Spreadsheet
2. Automatically analyzed to calculate average scores by AI model
3. Used to generate comparative visualizations across different criteria
4. Accessible to all participants through the results dashboard

Your instructor will provide access to the aggregated results dashboard once sufficient data has been collected.

## Example Prompt Topics
Here are some suggested topics to ask the AI to explain:
- Quantum computing
- Photosynthesis
- How the internet works
- Climate change
- Black holes
- Blockchain technology
- How vaccines work

## Submitting Your Results
After generating your report, please submit it to [submission instructions to be provided by your instructor].

## Troubleshooting
- If the application window appears cut off, you can scroll down to see all content
- Make sure to grade all five criteria before generating your report
- For large AI responses, you may need to scroll within the response text box

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.