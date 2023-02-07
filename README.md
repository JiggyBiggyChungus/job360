Job360 / Elias

# Setting it up
## Running the frontend
cd ui
ng serve

## Run the api-gateway (the microservice "register-service is in devlopment and not ready")
pip install "fastapi[all]"
Windows PS: venv\Scripts\Activate.ps1 | Linux, Mac Bash: source venv/bin/activate
uvicorn main:app --reload

# Test it yourself
1. Go to http://localhost:4200/register-business and fill out the form. Every field is required. Notice the validity status and the business object below the form updating in real time.
2. While clicking "Submit", look at the terminal where you ran uvicorn main:app --reload (the gateway-api) and see the just entered data printed out in the console as well as the http response code.

# My next steps
My next step is to complete the feature of registering a business. The api-gateway needs to redirect the request it receives to a microservice which handles registering business (see register service).
I then want the microservice to send the data to a normal sql db, like PostgreSQL or SQLite. If that is achieved feature #2 (see https://github.com/JiggyBiggyChungus/job360/issues/2) is done.

# Future plans
Aside from all the additional microservices and additional code to provide them in the api-gateway, I want to dockerize the microservices, each via their own dockerfile, so it's vertically scalable.
It would get the configurations from a hostfile lying a level on top of all the microservice folders. I wouldn't use kubernetes because of the steep learning curve, I would need to go trough, thus I can't gather any sensible data, that would be suitable for a monitoring output.
I also wouldn't use sharded db clusters, if anything I would use replicated db's using one entrypoint (db) for writing and a controller for copying to all other db instances.

In a perfect world I would, use an orchestrator like kubernetes to vertically scale and manage all microservice instances and collect sensible metric data so that I can send them to Monitoring Tool like Prometheus. Then I would use Grafana to display the data, just for convenience sake.
I also would implement a various instances of sharding trackers / queriers and sharded db clusters. I would send all write data to the sharding trackers / queriers which would order the data queries so that when writing to the sharded db clusters, no complications arise and it goes smooth like butter.
I would even implement some optimization code in the gateway-api using the kubernetes metrics, to relieve stressed containers and occupy less busy ones.