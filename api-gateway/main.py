from fastapi import FastAPI
import dataModels.business
from fastapi.middleware.cors import CORSMiddleware


# import sys
#
# modulename = 'dataModels'
# if modulename not in sys.modules:
#     print ('You have not imported the {} module'.format(modulename))

app = FastAPI()

origins = [
    "https://localhost",
    "http://localhost",
    "http://localhost:4200/register-business",
    "https://localhost:4200/register-business",
    "http://localhost:4200",
    "https://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/new-business/")
async def new_business(business: dataModels.business.Business):
    return business