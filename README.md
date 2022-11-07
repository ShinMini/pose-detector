# TEAM 2 PROJECT 

## Project Goal 

1. react native를 사용한 mobile app 만들기
2. expo를 활용해, ios, android 모두 호환 가능한 앱 만들기
3. tensorflow.js를 활용해 Machine learning 적용하기
4. expo library와 react native 그리고 tensorflow.js library를 활용해 추가 기능 활용하기
   * 1. Camera 기능
   * 2. 사용자 library에서 사진 및 비디오 가져오기
   * 3. expo를 활용해 기초 어플 assets에 필요한 데이터 사전 구성하기(fonts, background image... etc)
   * 4. tensorflow 머신 앱에서 연동시키기
   * 5. 사용자로부터 받아온 image 및 video 데이터를 tensorflow library가 인식할 수 있게 데이터 가공하기
   * 6. 가공된 데이터로 미리 학습시킨 tensor model로 부터 결과 예측하기
   * 7. 예측된 결과를 분석해 사용자에게 display 하기 

## Project Processing

### step1. Camera 기능
1. expo의 Camera 라이브러리를 통해 구현 가능했음. but TensorWithExpoCamera 버전을 통해 tensorflow가 원하는 tensor 객체 형식으로 이미지를 가져올 수 있음을 확인.
2. 하지만 최종적으로 프로젝트에서 제외함
   * 이유
      * 1. Camera를 통해 가져오는 화면의 경우 즉각적으로 processing단계를 거치게 됨.
      * 2. expo를 통해 생성한 앱의 경우, node에서 지원하는 filesystem 관련 라이브러리를 사용할 수 없음, 따라서 expo의 fileSystem 라이브러리를 활용하거나, 웹에서부터 요청을 통해 데이터를 획득해야함.
      * 3. project에 필요한 tensor model의 경우, 핸드폰 내장 gpu를 사용하면 빠르게 데이터 처리가 가능하지만 위와같은 이유로 browser시스템을 활용한 model control이 중점적이였음. 
      * 4 따라서 webGl을 통한 그래픽 가속의 경우에도 실시간 model processing이 어려웠기 때문에 결국, 이미 저장된 사진 혹은 video로 부터 모델을 생성하는 방식을 선택
3. 2번과 같은 이유로 초기 모델 또는 필요한 데이터의 경우 앱 초반에 데이터를 불러와 react의 useMemo훅을 활용해 최초 실행 시간을 길게 가져가므로써 이후 앱 실행속도를 향상시킬 수 있었음.



### 2. 사용자 library에서 사진 및 비디오 가져오기
* 원하는 운동 선택
![select](images/2dc791f0d51cdc7d08d567470b0ac1d592ad8d53c2ff81efc94666f5e62c6998.png)  

* 선택한 운동에 대한 정보를 알려준뒤.
![picture 3](images/527af74d899a8e59872d38dcd954a1a88e0612ff317b9bbaee9e57992ef86f49.png)  

* 사용자의 자세로 부터 분석한 결과를 알려주기 위한 사용자 라이브러리 호출.
![picture 5](images/e2db2cff15491a11d29209dc0b99ec9dea722c37850af821caa0f2a1c593eb79.png)  

* 사용자가 사진을 선택하는 장면
![picture 6](images/f56ee80891da6ab1c3200b83a2ce69add6721ee7acd26265848c8f02962da167.png)  

* 불러온 모델을 react native skia에서 지원하는 canvas형식으로 그려둠. (image타입의 경우 이후 tensor model이 요구하는 데이터 전처리를 진행하기 어려워서 canvas 태그에 그려버림)
![picture 7](images/6e3aa4659b4b078aa3e2c3e46660fe7d3b2f31d8e57caa681b7ec21eb05510fd.png)  


### 3. expo를 활용해 기초 어플 assets에 필요한 데이터 사전 구성하기(fonts, background image... etc),  4. tensorflow 머신 앱에서 연동시키기

* 사전 데이터를 불러오는 동안 로딩화면 지속
![useMemo](images/c0ab29983c11377b1fc21a5c382495dc1062b3746305ab0b69e9719c2dfda2e7.png)  

* 미리 생성해둔 로딩화면 출력, model과 font 정보를 모두 불러올 때까지.
![App loading](images/69cc41f309482d7d421f869813db6e0846461e479ebbd9023c1c2ef3b12f2485.png)  

###  5. 사용자로부터 받아온 image 및 video 데이터를 tensorflow library가 인식할 수 있게 데이터 가공하기
* user interface를 통해 보여주진 않음.  -> console 창을 통해 개발자가 확인할 수 있게끔 완성시켜둠.
* 1. canvas에 그릴 imageData 형식 -> MediaPicker , {IMG_DATA_SHAPE}
* 2. converter를 통해 가공한 image 형식 -> imgTensor, {IMG_TENSOR_DATA_SHAPE}
* 3. 최종 가공상태, model로 예측을 진행하기 전 마지막 프로세싱 img 타입 -> img, {PROCESSED_TENSOR_DATA_SHAPE}
![imageData](images/672d281c03fc8a257786a0b123bf84be4f8cca4323f4e6ee8f3b6ff26f7f9989.png)  


### 6. 가공된 데이터로 미리 학습시킨 tensor model로 부터 결과 예측하기
* 아직 미구현 상태
* 미구현 이유: 
  * 1. 3차원 tensor 배열로 생성해야함.
  * 2. 하지만 4차원 배열로 (sequence 데이터를 생각 못함) 생성해버림.
* 해결 방안
  * 1. 이 경우, sequence값은 1로 고정되기 때문에 3D type의 텐서형식으로 converting하던가, 
  * 2. 혹은 4D 차원의 값을 받아 이미지를 분석하는 메서드가 있는지 확인해 찾아 해결할 것같음.

![picture 9](images/917c24871f05b8ee426647ac326a924e4dfe47dd4f94c3c9755ccde19975f24e.png)  
### 7. 예측된 결과를 분석해 사용자에게 display 하기 
* 6번의 에러가 해결된다면, 바로 진행할 예정.

