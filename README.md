# Request Header Parser Microservice

This is a Node.js (with Express.js) small app which is part of the FCC Back End Certification. 
It listens GET requests, parses header and sends back a JSON with used ip address, language and software

## Example usage

```
https://project-headerparser.iotardis.repl.co/api/whoami
```

## Example output

```
{"ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
```

## [Try it](https://project-headerparser.iotardis.repl.co)