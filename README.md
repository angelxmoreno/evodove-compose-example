# evodove-compose-example

## setup
1. copy the `sample.env` to `.env`
```sh
cp sample.env .ev
```

2. start the containers
```sh
yarn docker:up
```

3. visit http://localhost/test1
The consumer container should print something like
```sh
evodovetest-consumer | Hello  { name: 'world' }
```
