#!/usr/bin/env python3

import mysql.connector
import json
import sys

# Always print the header + blank line
print("Content-Type: application/json")
print()  # <-- blank line REQUIRED after headers

try:
    conn = mysql.connector.connect(
        host="localhost",
        user="mballard",
        password="passwordNine",   
        database="mballard"
    )

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM fp_Book LIMIT 10;")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    print(json.dumps(rows))

except Exception as e:
    # Output error message as JSON
    print(json.dumps({"error": str(e)}))
    sys.exit(1)
