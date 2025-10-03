#!/usr/bin/env python3
from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()  # loads MONGO_URI from .env if it exists

app = Flask(__name__)
CORS(app)  # allows all origins; you can restrict with `origins=[...]`

# MongoDB connection
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb://localhost:27017"  # fallback local MongoDB
)

client = MongoClient(MONGO_URI)
db = client["sample_mflix"]
movies_collection = db["movies"]

@app.route("/movies/<title>")
def get_movie(title):
    movie = movies_collection.find_one({"title": title})
    if movie:
        movie["_id"] = str(movie["_id"])  # convert ObjectId to string
        return jsonify(movie)
    return jsonify({"error": "Movie not found"}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
