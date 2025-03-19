// Define criteria and weights
const criteria = {
    "simplicity": {
        "name": "Simplicity of Language",
        "description": "Does the response use simple words and short sentences that a 12-year-old would understand?",
        "weight": 0.25
    },
    "clarity": {
        "name": "Clarity of Explanation",
        "description": "Is the explanation clear, logical, and easy to follow?",
        "weight": 0.25
    },
    "examples": {
        "name": "Relatable Examples",
        "description": "Does it use concrete examples, analogies or metaphors that a 12-year-old would relate to?",
        "weight": 0.20
    },
    "jargon": {
        "name": "Avoidance of Jargon",
        "description": "Does it avoid technical jargon, or clearly explain technical terms when used?",
        "weight": 0.15
    },
    "engagement": {
        "name": "Engagement Factor",
        "description": "Is the explanation interesting, engaging, and appropriate for a young audience?",
        "weight": 0.15
    }
};

// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update slider value displays
    document.querySelectorAll('.slider').forEach(slider => {
        const valueDisplay = slider.nextElementSibling;
        slider.addEventListener('input', function() {
            valueDisplay.textContent = `${this.value}/10`;
        });
    });
    
    // Grade button functionality
    document.getElementById('grade-btn').addEventListener('click', gradeResponse);
    
    // Report button functionality
    document.getElementById('report-btn').addEventListener('click', generateReport);
    
    // Copy button functionality
    document.getElementById('copy-btn').addEventListener('click', copyReport);
    
    // Download button functionality
    document.getElementById('download-btn').addEventListener('click', downloadReport);
});

// Grade the AI response
function gradeResponse() {
    const aiName = document.getElementById('ai-name').value || "Unknown AI";
    const prompt = document.getElementById('prompt').value.trim();
    const response = document.getElementById('response').value.trim();
    
    if (!response) {
        document.getElementById('score-display').textContent = "Error: Please enter an AI response to grade";
        document.getElementById('feedback-display').textContent = "";
        return;
    }
    
    // Get ratings from sliders
    const ratings = {};
    for (const criterionId in criteria) {
        ratings[criterionId] = parseInt(document.getElementById(criterionId).value);
    }
    
    // Calculate score
    const score = calculateScore(ratings);
    
    // Generate feedback
    const feedback = provideFeedback(ratings);
    
    // Update results
    document.getElementById('score-display').textContent = `Score: ${score}/100`;
    document.getElementById('feedback-display').textContent = feedback;
    
    // Show results section if hidden
    document.getElementById('results').classList.remove('hidden');
}

// Calculate weighted score
function calculateScore(ratings) {
    let totalScore = 0;
    for (const criterionId in ratings) {
        const weight = criteria[criterionId].weight;
        totalScore += ratings[criterionId] * weight * 10; // Scale to 100
    }
    return Math.round(totalScore);
}

// Generate feedback based on ratings
function provideFeedback(ratings) {
    const feedback = [];
    
    // Find highest rated criterion
    let highestCriterionId = Object.keys(ratings)[0];
    let highestRating = ratings[highestCriterionId];
    
    for (const criterionId in ratings) {
        if (ratings[criterionId] > highestRating) {
            highestRating = ratings[criterionId];
            highestCriterionId = criterionId;
        }
    }
    
    // Find lowest rated criterion
    let lowestCriterionId = Object.keys(ratings)[0];
    let lowestRating = ratings[lowestCriterionId];
    
    for (const criterionId in ratings) {
        if (ratings[criterionId] < lowestRating) {
            lowestRating = ratings[criterionId];
            lowestCriterionId = criterionId;
        }
    }
    
    // Add strength
    feedback.push(`Strength: Good ${criteria[highestCriterionId].name.toLowerCase()}.`);
    
    // Add improvement area if rating is lower than 7
    if (lowestRating < 7) {
        feedback.push(`Could improve: ${criteria[lowestCriterionId].name}.`);
    }
    
    return feedback.join(' ');
}

// Generate markdown report
function generateReport() {
    const aiName = document.getElementById('ai-name').value || "Unknown AI";
    const prompt = document.getElementById('prompt').value.trim();
    const response = document.getElementById('response').value.trim();
    
    if (!response) {
        document.getElementById('score-display').textContent = "Error: Please enter an AI response to grade";
        document.getElementById('feedback-display').textContent = "";
        return;
    }
    
    // Get ratings from sliders
    const ratings = {};
    for (const criterionId in criteria) {
        ratings[criterionId] = parseInt(document.getElementById(criterionId).value);
    }
    
    // Calculate score
    const score = calculateScore(ratings);
    
    // Generate feedback
    const feedback = provideFeedback(ratings);
    
    // Generate markdown report
    const report = generateMarkdownReport(aiName, prompt, response, ratings, score, feedback);
    
    // Show report section
    document.getElementById('report-content').classList.remove('hidden');
    document.getElementById('markdown-report').value = report;
}

// Create markdown report content
function generateMarkdownReport(aiName, prompt, response, ratings, score, feedback) {
    const now = new Date();
    const dateStr = now.toLocaleString();
    
    let report = `# AI Explainability Grading Report

## Model Information
- **AI Model**: ${aiName}
- **Date**: ${dateStr}
- **Overall Score**: ${score}/100

## Prompt
\`\`\`
${prompt}
\`\`\`

## Response
\`\`\`
${response}
\`\`\`

## Evaluation Criteria

| Criterion | Weight | Rating | Weighted Score |
|-----------|--------|--------|---------------|
`;
    
    // Add criteria rows
    for (const criterionId in ratings) {
        const criterion = criteria[criterionId];
        const rating = ratings[criterionId];
        const weighted = rating * criterion.weight * 10;
        report += `| ${criterion.name} | ${criterion.weight*100}% | ${rating}/10 | ${weighted.toFixed(1)} |\n`;
    }
    
    report += `
## Feedback
${feedback}

## Grader Notes
_Add your additional observations here._
`;
    
    return report;
}

// Copy report to clipboard
function copyReport() {
    const reportText = document.getElementById('markdown-report').value;
    navigator.clipboard.writeText(reportText)
        .then(() => {
            alert("Report copied to clipboard!");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert("Failed to copy report. Please try selecting and copying manually.");
        });
}

// Download report as markdown file
function downloadReport() {
    const aiName = document.getElementById('ai-name').value || "unknown_ai";
    const reportText = document.getElementById('markdown-report').value;
    const safeName = aiName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `report_${safeName}_${timestamp}.md`;
    
    // Create blob and download link
    const blob = new Blob([reportText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
}