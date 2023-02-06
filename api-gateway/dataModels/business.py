from pydantic import BaseModel

class HqAdress(BaseModel):
    street: str
    city: str
    canton: str
    plz: str

class Credentials(BaseModel):
    email: str
    password: str

class Business(BaseModel):
    businessName: str
    shortDescription: str
    hqAdress: HqAdress
    credentials: Credentials