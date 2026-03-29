import os
from dotenv import load_dotenv

load_dotenv()

from app_with_ai import app as application

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    application.run(host="0.0.0.0", port=port)
