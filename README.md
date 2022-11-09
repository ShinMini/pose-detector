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

  1. Camera를 통해 가져오는 화면의 경우 즉각적으로 processing단계를 거치게 됨.
  * 2. expo를 통해 생성한 앱의 경우, node에서 지원하는 filesystem 관련 라이브러리를 사용할 수 없음, 따라서 expo의 fileSystem 라이브러리를 활용하거나, 웹에서부터 요청을 통해 데이터를 획득해야함.
  * 3. project에 필요한 tensor model의 경우, 핸드폰 내장 gpu를 사용하면 빠르게 데이터 처리가 가능하지만 위와같은 이유로 browser시스템을 활용한 model control이 중점적이였음. 
  * 4 따라서 webGl을 통한 그래픽 가속의 경우에도 실시간 model processing이 어려웠기 때문에 결국, 이미 저장된 사진 혹은 video로 부터 모델을 생성하는 방식을 선택
3. 2번과 같은 이유로 초기 모델 또는 필요한 데이터의 경우 앱 초반에 데이터를 불러와 react의 useMemo훅을 활용해 최초 실행 시간을 길게 가져가므로써 이후 앱 실행속도를 향상시킬 수 있었음.



### 2. 사용자 library에서 사진 및 비디오 가져오기
* 원하는 운동 선택
 
![image](https://user-images.githubusercontent.com/77220824/200265974-69446875-d304-4d9b-a386-1164ba1bd390.png)

* 선택한 운동에 대한 정보를 알려준뒤.
![image](https://user-images.githubusercontent.com/77220824/200266512-bd8e2cee-d518-4372-8ddd-c445212adced.png)

* 사용자의 자세로 부터 분석한 결과를 알려주기 위한 사용자 라이브러리 호출.
![image](https://user-images.githubusercontent.com/77220824/200266602-8045c43e-6cc9-4042-b57e-46ac25ddc362.png)

* 사용자가 사진을 선택하는 장면
![image](https://user-images.githubusercontent.com/77220824/200266680-b36e08ef-3c29-4f92-8013-441cb9d189a0.png)

* 불러온 모델을 react native skia에서 지원하는 canvas형식으로 그려둠. (image타입의 경우 이후 tensor model이 요구하는 데이터 전처리를 진행하기 어려워서 애초에 다차원 배열로 그려버리는 방식의 canvas 태그를 사용함.)
![image](https://user-images.githubusercontent.com/77220824/200266746-01bce8ae-2f3c-4f2a-9745-961208a1fa7b.png)

### 3. expo를 활용해 기초 어플 assets에 필요한 데이터 사전 구성하기(fonts, background image... etc),  4. tensorflow 머신 앱에서 연동시키기

* 사전 데이터를 불러오는 동안 로딩화면 지속
![image](https://user-images.githubusercontent.com/77220824/200266214-1eaf7b8f-6178-4da6-97bf-caf6ff5074a0.png)

* 미리 생성해둔 로딩화면 출력, model과 font 정보를 모두 불러올 때까지.
![image](https://user-images.githubusercontent.com/77220824/200266311-df6d6156-452d-4057-81e4-8b5f485b12b4.png)


###  5. 사용자로부터 받아온 image 및 video 데이터를 tensorflow library가 인식할 수 있게 데이터 가공하기
* user interface를 통해 보여주진 않음.  -> console 창을 통해 개발자가 확인할 수 있게끔 완성시켜둠.
* 1. canvas에 그릴 imageData 형식 -> MediaPicker , {IMG_DATA_SHAPE}
* 2. converter를 통해 가공한 image 형식 -> imgTensor, {IMG_TENSOR_DATA_SHAPE}
* 3. 최종 가공상태, model로 예측을 진행하기 전 마지막 프로세싱 img 타입 -> img, {PROCESSED_TENSOR_DATA_SHAPE}
![image](https://user-images.githubusercontent.com/77220824/200266390-7beba762-09b5-4330-936f-def1827b3c3d.png)



### 6. 가공된 데이터로 미리 학습시킨 tensor model로 부터 결과 예측하기
  * 해결완료.

### 7. 예측된 결과를 분석해 사용자에게 display 하기 
  * 구현 완료 
