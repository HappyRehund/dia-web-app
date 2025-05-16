"use client"
import React, { useState, useRef } from "react";
import Container from "../Container";
import { FileUpload, FileUploadHandlerEvent} from 'primereact/fileupload';
import axios from "axios";

function Upload() {
    const [predResult, setPredResult] = useState<string>("")
    const fileUploadRef = useRef<FileUpload>(null);

    const getpred = async (event: FileUploadHandlerEvent) => {
        const formData = new FormData;
        event.files.forEach(file => formData.append("file", file as Blob, file.name));

        const res = await axios.post("https://api-ulc.onrender.com/rcsv", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        setPredResult((res.data["Prediction"]));

        const storeres = await fetch('/api/detection', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(predResult),
        });
        if(!storeres.ok) {
            console.error("Failed to store diagnosis")
        } else {
            console.log("Stored diagnosis successfully")
        }

        fileUploadRef.current?.clear()
    }

    return (
        <Container>
            <div className="md:w-100% flex flex-col gap-4">
                <div className="bg-secondary rounded-xl p-4 md:p-6 my-2 md:my-0 shadow-md text-white">
                    <div className="flex-col flex opacity-0% items-center">
                        <h3 className="text-3xl font-semibold mb-2 mt-10">Upload your Temperature Records</h3>
                        <br></br>
                        <FileUpload name="uploadcsv"
                                    ref={fileUploadRef}
                                    accept="text/csv"
                                    customUpload
                                    uploadHandler={getpred}
                                    mode="basic"
                                    auto
                                    chooseLabel="Upload record"
                        />
                        <br></br>
                        <br></br>
                        {(predResult == "1") &&
                        <div className="bg-red-400 w-9/10 text-xl rounded-xl p-4 md:p-6 my-2 md:my-0 text-white">
                            <p className="font-bold">Diagnosis and Recommendation</p>
                            <p className="font-semibold">Your foot temperature readings suggest potential early signs of diabetic foot complications. We recommend consulting a medical professional to prevent further issues.</p>
                        </div>}
                        {(predResult == "0") &&
                        <div className="bg-green-400 w-9/10 text-xl rounded-xl p-4 md:p-6 my-2 md:my-0 text-white">
                            <p className="font-bold">Diagnosis and Recommendation</p>
                            <p className="font-semibold">Current monitoring shows normal skin integrity and no signs of diabetic ulcer detected. No urgent action needed. Keep monitoring and practicing proper foot care.</p>
                        </div>}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Upload;