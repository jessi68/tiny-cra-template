cra 없이 webpack, babel, prettier, eslint 를 활용하여 만든 react 설정을
자동으로 만들어주는 패키지입니다. 

설치하시려면 

npx my-react-config-without-cra [원하는 프젝 이름] 를 입력하시면 됩니다.


또한 여기서 더 나아가 자신이 설정한 react 설정 template 을 만들어주는 
npm 패키지를 자동으로 만들어주는 것까지 도전해보려고 합니다. 


https://www.npmjs.com/package/my-react-config-without-cra


* npm 패키지를 배포하고 테스트해보려는 분들께 조언

배포한후에 내가 만든 패키지가 잘 작동하는지 알아복기 위해 
설치를 해볼 때, 
![image](https://user-images.githubusercontent.com/47855517/160268365-be4f5cf7-dd10-4348-9e2b-28c10de86bdf.png)

이런 오류가 뜨시면

npm cache clean --force

를 실행하신 후 다시 설치를 해보세요. 

npm init 부터 하고 패키지 만들기..


개인적으로 느낀점: 만든 탬플릿을 그대로 설치해주는 패키지를 만들 때 사람이 만드니까 오래걸리고 실수도 꽤 있는 것 같다.
