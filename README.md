# Biasfree - Gender Bias Detection Dashboard

## Overview

**BiasFree** is a web application designed to analyze text for gender bias using a machine learning model. The tool helps identify and mitigate biased language in text data, making it valuable for researchers, content creators, and organizations aiming for inclusive communication.

## Features

- **Upload & Process Text**: Users can enter text or upload documents for analysis.
- **Real-time Bias Detection**: The application highlights gender-biased terms and phrases.
- **Visualization Dashboard**: Interactive charts and reports provide insights into bias levels.

## Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript (jQuery)
- **Backend**: Flask (for initial development), Render (for final deployment)
- **Machine Learning Model**: Deployed on Hugging Face (`kumarutkarsh99/biasfree`)
- **Deployment**:
  - Flask Backend: Hosted on Render using Gunicorn
  - Render: Used for a workable, cloud-based web app
