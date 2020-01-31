---
layout: page
title: '마크다운 작성법 정리'
path: '/markdownGuide'
date: '2020-01-21 17:35'
tag: '마크다운'
category: 'dev'
---

# Markdown 작성법

### 각종 개발 문서나 ,블로그에 글을 쓰기 위한 Markdown 작성 법을 정리 해 본다.

### 개인적으로 쓸 것 같은것 위주로 적어 두었고 필요할 때마다 업데이트 해야겠다.

## 1. 제목 태그

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

## 2. 링크

```
[<a> 태그 처럼 표시](https://casternuts.github.io/)

그냥 일반 링크
<https://casternuts.github.io/>

이미지 불러오기
![구글](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiXx9THppHnAhV0yIsBHanCDZUQjRx6BAgBEAQ&
url=https%3A%2F%2Fwww.google.co.kr%2F&psig=AOvVaw3xLW1jCDw2LibupzIQYY87&ust=1579579562284074)
```

[<a> 태그 처럼 표시](https://casternuts.github.io/)

그냥 일반 링크
<https://casternuts.github.io/>

이미지 불러오기
![구글](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiXx9THppHnAhV0yIsBHanCDZUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.google.co.kr%2F&psig=AOvVaw3xLW1jCDw2LibupzIQYY87&ust=1579579562284074)

## 3. 목록

```
1. 첫 번째 목록
2. 두 번째 목록
3. 세 번째 목록
```

1. 첫 번째 목록
2. 두 번째 목록
3. 세 번째 목록

## 4. 번호가 없고 Depth를 표현 할 수 있는 목록

```
- 목록을 표시할때
  - 이렇게
    - Depth 표현 가능
* 이런 문자나
+ 이런 문자도 Depth 표현 가능
    + `인라인 코드 가능`
        + 탭 두번시 코드 블록 생성
`여기에 인라인 코드`
```

- 목록을 표시할때
  - 이렇게
    - Depth 표현 가능

* 이런 문자나

- 이런 문자도 Depth 표현 가능 + `인라인 코드 가능` + 탭 두번시 코드 블록 생성
  `여기에 인라인 코드`

## 5. 폰트 스타일

```
**폰트**
__폰트__
_폰트_
*폰트*
~폰트~
~~폰트~~
```

**폰트**

**폰트**

_폰트_

_폰트_

~폰트~

~~폰트~~

## 6. Depth 표현

```
> 1
-caster

> about me.....
>> depth 표현 1
>>> depth 표현 2
>>>> ......
```

> 1
> -caster

> about me.....
>
> > depth 표현 1
> >
> > > depth 표현 2
> > >
> > > > ......

## 7. 현재 줄에 코드 입력

```
`여기안에 코드를 입력`
```

`인라인 코드`

## 8.테이블

```
| column | column1 | column2 |
|:-------|:-------:|--------:|
| data1 | datacolumn | datacolumn |
| data2 | datacolumn | datacolumn |
| data3 | datacolumn | datacolumn |
```

| column |  column1   |    column2 |
| :----- | :--------: | ---------: |
| data1  | datacolumn | datacolumn |
| data2  | datacolumn | datacolumn |
| data3  | datacolumn | datacolumn |

## 9. 체크박스

```
- [ ] 체크
- [v] 논 체크
```

- [ ] 체크
- [v] 논 체크

## 10. 이모지

https://kr.piliapp.com/twitter-symbols/

## 11. 줄바꿈

```
 <space>+<space> +<enter>
```

## 12. 수평선

```
<hr/>
```

<hr/>

# 참고 자료

https://velog.io/@yuuuye/velog-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4MarkDown-%EC%9E%91%EC%84%B1%EB%B2%95
https://gist.github.com/ihoneymon/652be052a0727ad59601
