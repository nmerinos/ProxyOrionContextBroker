# ProxyOrionContextBroker

Proxy for the client-Orion Context Broker's server communication for Cross Domain Requests in the FIWARE platform.

## Overview

Orion Context Broker server, one of the Fiware framework's generic enablers, is an implementation of the Publish/Subscribe Context Broker GE, providing the NGSI9 and NGSI10 interfaces. Using these interfaces, clients can do several operations:
  -Register context producer applications, e.g. a temperature sensor within a room
  -Update context information, e.g. send updates of temperature
  -Being notified when changes on context information take place (e.g. the temperature has changed) or with a given frequency (e.g. get the temperature each minute)
  -Query context information. The Orion Context Broker stores context information updated from applications, so queries are resolved based on that information.

But its cross domain requests will not be allowed by web browsers. As a solution we can use this node-based proxy.

## Dependencies

The Proxy is standard Node.js app and doesn't require more dependencies than the Node.js interpreter (0.10 or higher) and the NPM package utility. For RPM installations using Yum, those dependencies should be automatically installed.


## Usage

  - Modify the file proxy.js, replace "HereYourOrionServer" for your Orion Server
  - Go to the project's directory in a terminal
  - Install dependencies

```
npm install 
```
  - Run the server
  
```
node proxy.js
```

## License

Orion FiWare Policy Enforcement Point is licensed under Affero General Public License (GPL) version 3.

