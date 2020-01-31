---
layout: page
title: '도커 윈도우 설치법'
path: '/dockerInstallation'
date: '2020-01-22 10:20'
tag: 'Docker'
category: 'dev'
---

### 도커 윈도우 설치 법을 알아본다.

## 1. Docker Desktop for Windows 설치

도커를 윈도우에서 쓰기 위해선 Hyper-v 가 설정되어있어야 한다.
이러한 방법은 윈도우10 pro 버전에서 설치 가능하다. 만약 가상화가 지원 되지 않는다면 Docker toolbox를 이용해 설치하는 방법이 있다.

1. Docker 회원가입
2. https://hub.docker.com/editions/community/docker-ce-desktop-windows 에서 다운받아 설치 (Community Edition)

3. 설치 하게 되면 쿠버네티스가 안보일 것 이다.

4. 윈도우 작업표시줄에 도커를 우클릭해서 Switch Linux container.... 로 되있는 부분을 클릭한다.

5. 리눅스 컨테이너로 바뀌면 정상적으로 쿠버네티스 까지 사용할 수 있다.
