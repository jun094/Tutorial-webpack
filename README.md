# webpack-tutorial

webpack 이해하기

### Desc

- [참고 교안](https://uaa.app/blog/structure-of-webpack-module-bundle)


### Memo

### __dirname과 path
- __dirname : 절대경로
    - `console.log(__dirname); // '/Users/goorm/Documents/dev/webpack-tutorial'`

- path : node 내장 module , 경로 조작하기 쉽게 조작하기 위한 도구
    - `.resolve()` : / 로 경로 이어 붙혀주는 path 내 함수
    - `path.resolve(__dirname, "abc"); // '/Users/goorm/Documents/dev/webpack-tutorial/abc'`

#### dependencies 와 devDependencies
- dependencies : 어플리케이션 내부의 필요한 모듈들 정의 (--save)
- devDependencies : 개발과정에 필요한 모듈들 정의 (--save-dev)  
