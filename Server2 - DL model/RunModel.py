from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from ClassifierFunction import ClassifierFunction
import os

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

    # Define the directory where you want to save the files
    save_dir = "E:\My Projects\ECG-Scan - Final Product\ECG-Scan---Final-product\Input_ECG_Folder"

    # Create a subdirectory with the name "folder" + matFile's name
    subdirectory = "folder" + matFile.filename
    save_dir_with_subdirectory = os.path.join(save_dir, subdirectory)
    os.makedirs(save_dir_with_subdirectory, exist_ok=True)

    # Save the 'matFile' to the specified subdirectory
    mat_file_path = os.path.join(save_dir_with_subdirectory, matFile.filename)
    with open(mat_file_path, "wb") as mat_file_destination:
        mat_file_destination.write(await matFile.read())

    # Save the 'headerFile' to the specified subdirectory
    header_file_path = os.path.join(
        save_dir_with_subdirectory, headerFile.filename)
    with open(header_file_path, "wb") as header_file_destination:
        header_file_destination.write(await headerFile.read())

    Input_data_folder_path = os.path.join(save_dir, subdirectory)

    ClassifierFunction(Input_data_folder_path)

    return {"message": "Files uploaded and saved successfully"}
