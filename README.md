# Week1_Assignment\_\_Product-Registration 🥩

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 기능 📍](#2-구현-기능-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [프로젝트 설치 및 실행 ✨](#5-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://infallible-edison-a64509.netlify.app/)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 1주차 2번째 기업 과제
- 주제 : Admin 페이지의 상품 등록 페이지 제작
- 기간 : 2022.01.27 ~ 2022.01.29

<br />

## 2. 구현 기능 📍

- 노출 기한 및 판매기간 설정
  - 제한 없음, 미노출, 노출 기간 설정 분류
  - 노출 기간은 시작 시간보다 결과 시간이 이전일 때 경고창 발생
- 상품 기본 정보
  - 카테고리 선택시 삭제 가능한 카테고리 박스 생성
  - 필터 태그 검색 기능
  - 상품 코드 자동 생성
  - 상품명, 상품 구성 소개 작성 항목
  - 상품 썸네일, 대표 이미지 업로드 기능
  - 옵션 재고 입력시 총수량재고 업데이트
- 상품 옵션
  - 옵션 세트 추가
  - 옵션 세트 내 옵션 추가
  - 이미지 첨부 기능
  - 옵션 내 추가 옵션 상품 추가
  - 상품 정상가와 판매가를 입력했을 때 할인율 자동 계산
  - 옵션 세트, 옵션, 추가 옵션별 삭제 기능
  - 옵션이 없을 때 안내 문구 표시
- 상품 소개 이미지, 구매자 추천 이미지
  - 이미지 업로드
- 상품 정보 고시
  - 정보 고시 및 항목 추가, 삭제 기능
  - 각 항목별 입력
- 상품 배송 설정, 혜택 허용 설정, 기타 설정
  - 토글로 체크 기능 설정
  - 주문 시간 및 새벽 배송 날짜 체크 기능
- 제출 시 결과 데이터 key 한글로 변환
  - 변환 과정에서 유효성 체크

<br />

## 3. 프로젝트 구조 🌲

```bash
src
├── Assets
├── Components
│   ├── Common
│   │    ├── Header
│   │    └── Navigation
│   ├── ProductImageUpload
│   ├── ProductInformation
│   ├── ProductNotice
│   ├── ProductOption
│   ├── ProductPeriod
│   └── ProductShippingSetting
├── FormContextAPI
├── Pages
├── Utils
│    ├── Button
│    ├── Constants
│    ├── ImageUploader
│    ├── Styles
│    │     ├── _reset.scss
│    │     ├── common.scss
│    │     └── date.scss
│    └── Toggle
├── App.jsx
└── index.js
```

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                                                      |
| ------------------------------------------ | -------------------------------------------------------------- |
| [황상섭](https://github.com/sangseophwang) | 헤더, 네비게이션바, 옵션 항목 구현, README.md 작성             |
| [금보배](https://github.com/BobaeKeum)     | 상품 소개 및 구매자 추천 이미지 구현                           |
| [정인권](https://github.com/developjik)    | Context API, 상품 등록, 배송 설정, 노출 및 판매기간 구현, 배포 |
| [현다솜](https://github.com/som-syom)      | 환경설정 구축, 상품 기본 정보, 유효성 체크 및 key 한글 변환     |

<br/>

## 5. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/PreOnBoarding-Team17/Week1_Product_Registration.git
```

2. 프로젝트 패키지 설치

```plaintext
$ npm install
```

3. 프로젝트 실행

```plaintext
$ npm start
```
