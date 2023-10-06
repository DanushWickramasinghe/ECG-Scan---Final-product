from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from scipy.io import loadmat
import io
from ClassifierFunction import ClassifierFunction

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Origin of the React App
    allow_credentials=True,
    allow_methods=["*"],  # Specify the HTTP methods you want to allow
    allow_headers=["*"],  # Specify the HTTP headers you want to allow
)


@app.post("/userAccount")
async def upload_files(
    matFile: UploadFile = File(),
    headerFile: UploadFile = File(),
):
    # Access the uploaded files as UploadFile objects
    mat_file_contents = await matFile.read()

    # Parse the content of the uploaded .mat file
    loaded_data = loadmat(io.BytesIO(mat_file_contents))

    # Access the 2D array
    if 'val' in loaded_data:
        mat_2D_array = loaded_data['your_variable_name']
        # Now 'two_dimensional_array' contains your 2D array
    else:
        # Handle the case where the variable name is not found





        

    # header_file_contents = await headerFile.read()
    #################### Edit this codeee ########################
    
    
    
    
    
    
    
    # Process the uploaded files and form data as needed
    ClassifierFunction(mat_2D_array, headerFile)

    return {"message": "Files uploaded and form data received successfully"}
