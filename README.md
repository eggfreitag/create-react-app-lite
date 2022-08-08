<div align="center">
  <h1> Create React App Lite </h1>
  <img src="https://user-images.githubusercontent.com/93723399/180503691-9c0eadcb-3d66-4890-9948-6e62f8044b99.png" alt="logo" />
</div>

<details>
<summary style="font-size: 20px">☝🏼 Why React-Create-App-Lite</summary>

> 처음 React를 접했을 때 **`npx create-react-app my-app`** 커맨드를 입력하고 터미널에서 벌어지는 일들에 입이 쩍 벌어졌던 기억이 아직 생생합니다.<br>
> 부트캠프 수료 중 `Javascript`로 모든 과제, 프로젝트를 진행했고 그 중 React를 다룰 때는 `Create-React-App 이하 CRA`을 사용했습니다.<br>
> 항상 `CRA`의 구동 방식이 궁금했습니다.<br>
> 어떻게 `package.json`에서 `node start.js`같은 명령어가 아닌 `react-scripts start`로 웹 페이지가 열리는지, `Webpack`을 사용하는 것으로 알고 있는데 도대체 `Webpack`에 관련된 설정은 어디에 숨겨져 있는 건지 궁금했습니다.<br>
> 이렇게 Create-React-App-Lite 프로젝트가 시작되었습니다.<br>
> `CRA`의 경우 `38.4kB`의 `Unpacked Size`를 갖고 있지만 `Create-React-App-Lite 이하 CRAL`의 경우 `28.5kB`정도로 비교적 가볍습니다.<br>
> `Install`시 `CRA`는 `331MB`의 용량을, `CRAL`은 `167MB`로 절반의 용량을 갖고 있습니다. 설치 시간 또한 절반으로 줄였습니다.<br>
> `Typescript`와 관련된 코드들은 제외했고 `Webpack Plugin`또한 `Javascript`와 `JSX`파일만을, `CSS`와 `CSS Module`, `SASS` 그리고 `CSS in JS`를 적용할 수 있게 코드를 작성했고 이미지 파일들은 `Webpack`에 내장된 `Asset Module`사용으로 불필요한 `File-loader`의 사용을 피했습니다.<br>
> `CRA`는 `React-Native`, `React-Native-Web`, `Typescript`에도 대응할 수 있도록 만들어져 `CRAL`보다 용량이 크고 설치 시간이 느리지만 `CRAL`은 `Javascript`만을 목표로 하였기 때문에 가능한 프로젝트였습니다.<br>
> **가볍다**는 뜻의 `Lite`에 걸맞게 보다 적은 Dependencies와 용량, 설치 시간을 목표로 진행한 프로젝트였고 `Webpack`에 대해 깊이 탐구했고 `Node.JS`의 프로세스 내에서도 프로세스를 실행할 수 있게 해주는 기능인 `Child Process`에 대해서도 알게 됐습니다.<br>
> Github에 `Issues`탭과 `Discussions`탭의 사용으로 사용자의 피드백을 바탕으로 계속해서 업데이트 예정입니다.

</details>

<details>
<summary style="font-size: 20px">✌🏼 Challenges faced in this project</summary>

> 해당 프로젝트를 진행하기로 마음먹은 후 가장 어려웠던 건 어떻게 `react-scripts start`가 작동하는지 알아내는 과정이었습니다. 프로젝트의 핵심이 저 명령어에 모두 들어있다고 해도 과언이 아니었고요.<br>
> 저는 우선 `Create-React-App 이하 CRA`를 천천히 살펴보았습니다.<br>
> `CRA`의 `react-scripts start` 명령어가 `eject`후에는 `node scripts/start.js`로 바뀐다는 사실을 확인했습니다.<br>
> `react-scripts`에 모든 해답이 있다고 생각했고 `Express`를 사용해 서버를 구축할 때 사용했던 모듈인 `Nodemon`또한 `node ...`가 아닌 `nodemon ...`의 실행 방식이었던 것을 기억해냈습니다.<br>
> `Nodemon`을 실행할 때처럼 `CRA`역시 `node ...`이 아닌 `모듈명 파일`의 형식으로 `build`, `start`등을 실행시킴을 파악하고 `react-scripts`모듈과 `모듈명 파일`의 명령어가 어떻게 동작하는지 공부했습니다.<br>
> 해답은 모듈 `package.json`파일의 `bin`속성에 있었습니다.<br>
> `Executables`즉 실행 가능한 로컬의 파일을 `bin`속성에 지정하면 상위 `package.json`의 `node scripts`를 통해 파일을 실행할 수 있었습니다. <br>
> 이후 오랜 시간 모듈 하나하나의 기능과 작동원리들을 파악하고 `start.js`파일이 결국에는 `Webpack Dev Server`를 동작하는 스크립트임을 알게 됐습니다.<br>
> `start.js`파일에서 `react-dev-utils`의 `chalk`, `clearConsole` 등을 불러 사용하는 것을 확인, 이후 호출하는 하나하나의 모듈들을 파악하고 본 프로젝트에서의 필요 여부를 검증했습니다.<br>
> 모든 흐름을 파악하고 나서야 본격적인 코딩을 시작했고 `react-scripts-lite`라는 모듈을 따로 만들어 그 안에 실행할 스크립트들을 숨겨두었습니다.<br>
> 사용자에겐 불필요한 `Webpack`, `Jest`, `Prettier`, `ESLint`의 설정을 `React-Scripts-Lite`의 `config`폴더 안으로 옮겨 `Create-React-App-Lite`의 폴더구조를 단순화할 수 있었습니다.<br>
> 또한 사용자가 원할 시 구현된 `eject`기능을 사용하여 언제든지 원하는 대로 설정을 변경할 수 있습니다.<br>
> 이 `eject`구현 또한 어려운 과제 중 하나였는데 파일의 위치를 옮기면서 `eject`여부에 따라 설정의 경로들을 바꿔 줘야 했기 때문입니다.<br>
> `File System`모듈에 대한 이해가 필요했고 `NodeJS`내부 모듈 `Readline`의 사용으로 외부 라이브러리(`CRA`의 경우 `Prompts`) 없이 `eject`실행 여부를 재확인하는 콘솔을 출력했습니다.<br>
> 결국 이 프로젝트의 핵심은 **프로세스의 흐름**과 **NodeJS에 대한 보다 깊은 이해**였습니다.<br>
> `NodeJS`의 프로세스 안에서 프로세스를 실행할 수 있게 해주는 `Child_Process`에 관해 처음 공부했고 서로 얽혀있는 파일들의 관계를 파악하고 필요 여부를 검증하면서 `NodeJS`에 말그대로 "Deep dive"했습니다.
<<<<<<< HEAD
=======

>>>>>>> e076ceb (docs: README 수정)

</details>
<br>
Create React App Lite는

- `npx create-react-app-lite <my-app>` 을 통해 어디서나 설치할 수 있습니다
- `node_modules`에 설치되어있는 `react-scripts-lite`를 통해 작동합니다

Create React App Lite는 macOS를 기반으로 만들었습니다. 문제가 있다면, [Issue를 남겨주세요](https://github.com/eggfreitag/create-react-app-lite/issues/new). 궁금한점이 있다면 [GitHub Discussions](https://github.com/eggfreitag/create-react-app-lite/discussions/new)을 남겨주세요! |

## Quick Overview

```jsx
npx create-react-app-lite <my-app>
cd my-app
npm start
```

이후 [`http://localhost:3000`](http://localhost:3000) 으로 접속해서 앱을 확인하세요

배포를 위한 준비가 끝나면 `npm run build`명령어로 번들링할 수 있습니다

## Creating an App

`npx create-react-app-lite <my-app>`커맨드를 실행한 폴더 안에 `my-app`이라는 디렉토리를 생성합니다

`my-app` 디렉토리 안에는 아래와같은 구조의 초기 프로젝트가 생성되어있습니다

```jsx
my-app
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── assets
    │   └── logo.png
    ├── components
    │   ├── App.css
    │   ├── App.js
    │   ├── Count.js
    │   └── GlobalStyle.js
    ├── index.js
    └── test
        └── App.test.js
```

폴더 구조로 고민할 필요 없이 바로 사용자의 `react-app`을 만들수 있습니다

설치가 완료된다면 아래의 명령어로 프로젝트에 진입할 수 있습니다

```jsx
cd my-app
```

생성된 프로젝트 안에서, 미리 설정된 몇가지 명령어를 실행할 수 있습니다

### **`npm start`**

- 기본적으로 [`http://localhost:3000`](http://localhost:3000) 으로 연결됩니다
- 포트를 변경하고싶다면 `npm start`뒤에 `PORT=<원하는숫자>`로 지정할 수 있습니다

![start](https://user-images.githubusercontent.com/93723399/180507506-e52e8095-8423-4b40-95a9-b1d0391f6e0a.gif)

[]()

### **`npm test`**

- `Jest`를 기반으로 한 test를 실행하고 결과를 출력합니다
- `src`폴더 안의 `<component>.(spec || test).js(x)`을 찾아 테스트합니다

![test](https://user-images.githubusercontent.com/93723399/180508436-54bc87d7-c5fc-4383-81ce-c9a3078373d7.gif)

### **`npm run build`**

- `Build` 폴더내에 배포 환경에서 사용할 번들링한 결과물을 출력합니다

![build](https://user-images.githubusercontent.com/93723399/180509508-5358a42a-b609-43c5-af44-1e0f602f87bf.gif)

### **`npm run prettier & npm run lint`**

- 전체 파일에 걸친 코드 점검과 코드 정리를 실행합니다

![prettier](https://user-images.githubusercontent.com/93723399/180510299-65542372-86dc-4eb7-a068-4b3dabc5ae6c.gif)

### **`npm run eject`**

- 숨겨진 모든 설정을 확인할 수 있습니다
- `Webpack`, `Prettier`, `ESLint`, `Jest`설정을 사용자의 필요에 맞게 변경할 수 있습니다

![eject](https://user-images.githubusercontent.com/93723399/180511843-5f6dd9c3-f952-432e-b00c-907a10f4bcf6.gif)

## Tech Stacks

<div align="center">
  <img alt="html" src ="https://img.shields.io/badge/html-red.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/>
  <img alt="css" src ="https://img.shields.io/badge/CSS-blue.svg?&style=for-the-badge&logo=CSS3&logoColor=white"/>
  <img alt="javascript" src ="https://img.shields.io/badge/Javascript-yellow.svg?&style=for-the-badge&logo=javascript&logoColor=white"/>
  <img alt="react" src ="https://img.shields.io/badge/React-black.svg?&style=for-the-badge&logo=React&logoColor=bl"/>
  <img alt="webpack" src ="https://img.shields.io/badge/Webpack-skyblue.svg?&style=for-the-badge&logo=Webpack&logoColor=white"/>
  <img alt="babel" src ="https://img.shields.io/badge/babel-yellow.svg?&style=for-the-badge&logo=Babel&logoColor=red"/>
  <img alt="jest" src ="https://img.shields.io/badge/jest-red.svg?&style=for-the-badge&logo=Jest&logoColor=black"/>
</div>

## What’s Included?

- `CSS`, `SASS`, `Styled-Components`, `CSS Module` 모두 사용할 수 있습니다
- `Jest`를 적용한 Unit test를 할 수 있습니다
- 배포를 위해 JS, CSS, 이미지들을 번들링해줍니다
- `Webpack-DevServer`를 사용하여 파일의 변화에 즉각적으로 반응합니다
- `eject`를 통하여 사용자가 원하는대로 설정을 변경할 수 있습니다
