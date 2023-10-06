import os
import subprocess

# Get the full path to other_script.py in the same directory as subprocc.py
script_dir = os.path.dirname(os.path.abspath(__file__))
script_path = os.path.join(script_dir, "Run_ECG_model.py")

from fastapi import FastAPI

app = FastAPI()

@app.get("/results")
def members():
    # Initialize variables for real_value and predicted_output
    real_value = ""
    predicted_output = ""

    result = subprocess.check_output(["python", script_path], stderr=subprocess.STDOUT, universal_newlines=True)
    output_lines = result.strip().split('\n')
    
    # Parse the lines to extract the values
    predicted_output = output_lines[0].split(': ')[1].strip()
    real_value = output_lines[1].split(': ')[1].strip()
 
    response_data = {
        "real_value": real_value,
        "predicted_output": predicted_output
    }

    return response_data

