#!/bin/sh

mvn clean install -Dorganisation=$APIGEE_ORG -Denvironment=$APIGEE_ENV -Dusername=$APIGEE_USER -Dpassword=$APIGEE_PASSWORD