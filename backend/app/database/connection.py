import mysql.connector
from mysql.connector import Error

from app.config import (
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
)


def create_connection():
    """
    Create a connection to the MySQL database.
    """
    try:
        connection = mysql.connector.connect(
            host=MYSQL_HOST,
            port=MYSQL_PORT,
            user=MYSQL_USER,
            password=MYSQL_PASSWORD,
            database=MYSQL_DATABASE
        )

        if connection.is_connected():
            print("✅ MySQL Connected Successfully")
            return connection

    except Error as e:
        print(f"❌ Database Connection Error: {e}")
        return None