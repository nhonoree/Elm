from google.oauth2 import service_account
from googleapiclient.discovery import build

# Path to your downloaded JSON file
SERVICE_ACCOUNT_FILE = r"C:\Users\USER\Desktop\ElmChoir\config\my_google_credentials.json"


# Define the required scopes
SCOPES = ["https://www.googleapis.com/auth/calendar"]

# Authenticate using the service account JSON file
credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES
)

# Build the Google Calendar service
service = build("calendar", "v3", credentials=credentials)

# Test: List available calendars
calendar_list = service.calendarList().list().execute()

# Print calendar names
for calendar in calendar_list.get("items", []):
    print(f"Calendar Name: {calendar['summary']}")
#google credentials
SERVICE_ACCOUNT_FILE = r"C:\Users\USER\Desktop\ElmChoir\config\my_google_credentials.json"
