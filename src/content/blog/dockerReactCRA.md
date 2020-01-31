---
layout: page
title: '도커로 Create react App을 이미지화 해서 실행 시키기'
path: '/dockerReactCRA'
date: '2020-01-22 15:54'
tag: 'Docker'
category: 'dev'
---

### 도커로 Create react App을 이미지화 해서 실행 시켜보자

- 본 글은 CRA 2.0 이상으로 생성된 APP 기준으로 설명 합니다.
  https://mherman.org/blog/dockerizing-a-react-app/ 을 읽고 나름대로 실습 한 후 정리한 걸 적어 두었습니다.

도커를 윈도우에서 쓰기 위해선 Hyper-v 가 설정되어있어야 한다.
이러한 방법은 윈도우10 pro 버전에서 설치 가능하다. 만약 가상화가 지원 되지 않는다면 Docker toolbox를 이용해 설치하는 방법이 있다.

1. Create react-app 으로 리액트 app을 만든다.

2. 프로젝트 최 상단에 Dockerfile 작성

```
# alpine 이미지는 상대적으로 용량이 작다
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# 생성될 도커이미지의 환경 변수 경로를 설정한다.
ENV PATH /app/node_modules/.bin:$PATH

# /app은 도커이미지의 최상단 경로이므로 package.json을 동일한 위치에 두기 위해 카피한다.
COPY package.json /app/package.json
# package.json 을 기준으로 node_module을 다운로드 한다.
# --silent는 로그가 안나오게끔 하는 옵션이다.
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# 이후 앱을 실행 하기 위한 npm 명령어를 입력한다.
CMD ["npm", "start"]
```

3. .dockerignore 파일을 작성 한다

```
node_modules
```

4.docker 이미지 생성

```
docker build -t '이미지명' .
```

5. docker run

```
## 리눅스 및 Mac
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm '이미지명'
## 윈도우
docker run -v %cd%:/app -v /app/node_modules -p 3001:3000 --rm '이미지명'
```

- -v \${PWD}:/app 은 컨테이너 '/app' 경로에 마운트 한다.
- 컨테이너 안에있는 node_modules를 사용하고 싶다면
  `-v /app/node_modules` 옵션을 사용한다.
- `-p 3001:3000` 는 컨테이너 내부에서 3000포트로 돌고 있는 App을 외부 포트 3001에 Mapping해 접근 가능하게 한다.
- `--rm` 명령어는 컨테이너와 외부 정의된 volume을 컨테이너 종료시 지운다.

6. localhost:3001 로 접속 해 정상적으로 실행되는지 확인 한다.

## docker-compose를 이용한 방법

1. 프로젝트 상단에 docker-compose.yml 파일을 생성한다.

```
version: '3.7'

services:

  sample:
    container_name: sample
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - '.:/app'
      - '/app/node_modules'
    ports:
      - '3001:3000'
    environment:
      - NODE_ENV=development
```

- 해당 파일은 기존에 인라인으로 실행시키던 부분을 미리 정의해둔 파일이다

2. docker-compose로 빌드 및 바로 실행

```
docker-compose up -d --build
```

3. docker-compose를 중지 하고 싶을때

```
docker-compose stop
```

## 마치며

Docker를 예전부터 들어서 어떤 역할인지 알고는 있었지만 직접 이용해서 이미지화-> 실행을 한적은 없었던 것 같다.

리액트+nginx 구조로 많이 쓰는 것 같은데 다음번엔 nginx까지 연결해서 한번 해봐야 겠다.

쿠버네티스는 공부 해봤는데 개념은 이해 가지만 대 고객 서비스의 트래픽이 많지 않으면 쓸일이 많이 없을 것 같다. 도커에 더욱 익숙해져서 개발환경에 대한 스트레스를 날려야 겠다.

`-v /app/node_modules` 부분이 잘 이해가 안가는데 불륨 관련된 부분을 다시 봐야겠다

<h1/>

### 참고

#### https://mherman.org/blog/dockerizing-a-react-app/
