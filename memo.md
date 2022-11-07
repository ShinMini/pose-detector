전의 학습의 핵심은 이전에 학습한 결과를 재사용하여 새로운 학습 작업의 속도를 높이는 것입니다. 
다르지만 관련있는  머신 러닝 작업을 수행하기 위해 한 데이터셋에서 이미 훈련한 모델을 사용합니다. 

미리 훈련된 이런 모델을 base model이라고 부릅니다. 
전이 학습은 이따금 베이스 모델을 다시 훈련하기도 하고 베이스 모델을 기반으로 새로운 모델을 만들기도 합니다. 
이런 새로운 모델을 전이 모델(transfer model)이라고 합니다. 

# 모델 적응(model adaptation)

   * 특정 사용자의 데이터에 모델을 적응시키는 것, 이 데이터가 원본 훈련 세트와는 다르지만, 작업은 완전히 동일함.

# 전의 학습(transfer learning)의 장점

   * 전이 학습이 필요한 데이터와 계산량 측면에서 더 효율적이다. 
   * 베이스 모델의 특성 추출 능력을 재사용하기 때문에 이전 훈련에서 얻은 이점에서 시작한다.

# drop out?

* 드롭아웃은 심층 신경망에서 과대적합을 감소시키기 위한 방법으로 가장 효과적이고 널리 사용되는 방법 중 하나이다. 

* feature of drop out layer
   * 훈련 단계(Model.fit())에서 입력 텐서의 일부 원소를 렌덤하게 0으로 설정합니다.(즉, 드롭 아웃합니다.)
   * 이를 위해 드롭아웃 층은 드롭아웃 비율 매개변수 하나를 가진다. (ex) (rate 매개변수)
   * 추론 단계(Model.predict()와Model.evaluate())에서는 드롭아웃이 입력 텐서의 원소를 렌덤하게 0으로 만들지 않습니다. 
   * 대신 입력을 바꾸지 않고 출력으로 내보냅니다.(즉, 항등 함수(indentity mapping) 처럼 동작합니다.)

# 모델 객체의 save() 메서드는 모델을 파일 시스템의 디렉터리에 저장합니다. 
이 메서드는 하나의 매개변수를 받는데, file://로 시작하는 URL 스킴(scheme)문자열입니다. 

* tfjs-node를 사용하기 때문에 모델을 파일 시슨템에 저장할 수 있음.

model.save()메서드는 일반적으로 파일이나 네트워크를 통해 입출력을 수행하기 때문에 비동기 함수임.
이러한 이유 때문에 save()메서드 호출에 await을 사용함. 

save()메서드 호출을 통해 저장된 파일은 
1. model.json
2. weights.bin
으로 저장됨.

## model.json

* 모델의 토폴로지(topology)를 담고 있는 JSON 파일입니다. 
   * 토폴로지가 의미하는 것은 모델을 구성하는 층 타입과(conv2d 층의 filters, dropout 층의 rate 매개변수와 같은) 설정 매개변수,
   * 층이 서로 연결되는 방식을 포함합니다. (속된말로 와꾸라고 하죠. structure정도로 해두자.) 
   * MNIST 함성곱 신경망의 경우 시퀸셜 모델이므로 연결이 단순합니다. 

* 모델 토폴로지(topology)이외에 model.json은 모델 가중치의 매니페스트(manifest)도 담고있다.
   * 여기에는 모든 모델 가중치의 이름, 크기, 데이터 타입, 가중치 값이 저장된 위치가 나열되어 있다. 
   * 이제 두번 째 파일 weights.bin이 필요하다. 

## weights.bin

* weights.bin은 모든 모델의 가중치 값을 저장하고 있는 이진 파일입니다. 
   * 개별 가중치가 시작되고 끝나는 경계가 없는 단순한 이진 스트림입니다. 
   * model.json에 있느 JSON객체의 weightsManifest 부분에 이에 대한 메타 정보가 있습니다.


# tf.loadLayersModel() 

* tfjs-node를 사용해 모델을 로드할경우, tf.loadLayersModel() 함수를 사용합니다.
  * ex) const loadedModel = await tf.loadLayersModel('file://tmp/tfjs-node-mnist');

* ft.loadLayer은 model.json에 저장된 토폴로지 데이터를 역직렬화하여 모델을 만듭니다. 
* 그다음 tf.loadLayersModel()이 model.json에 있는 매니페스트 정보를 사용해 weights.bin에서 이진 가중치 값을 읽어 모델 가중치의 값을 강제로 설정합니다. 
* model.save()와 마찬가지로 tf.loadLayersModel()은 비동기 함수입니다.
* 따라서 이 함수를 호출할 떄 await을 사용합니다. 


# Techable Machine web에서 학습한 모델 import 코드 

* 웹 버전 임포트 문
[url](https://teachablemachine.withgoogle.com/models/VwWDui0Fo/)

``` html
<div>Teachable Machine Pose Model</div>
<button type="button" onclick="init()">Start</button>
<div><canvas id="canvas"></canvas></div>
<div id="label-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js"></script>
<script type="text/javascript">
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

    // the link to your model provided by Teachable Machine export panel
    const URL = "https://teachablemachine.withgoogle.com/models/VwWDui0Fo/";
    let model, webcam, ctx, labelContainer, maxPredictions;

    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a tmPose object to your window (window.tmPose)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // Prediction #1: run input through posenet
        // estimatePose can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);

        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }

        // finally draw the poses
        drawPose(pose);
    }

    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }
</script>

```

# model download 이후, 저장소에서 import
``` html
<div>Teachable Machine Pose Model</div>
<button type="button" onclick="init()">Start</button>
<div><canvas id="canvas"></canvas></div>
<div id="label-container"></div>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js"></script>
<script type="text/javascript">
    // More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

    // the link to your model provided by Teachable Machine export panel
    const URL = "./my_model/";
    let model, webcam, ctx, labelContainer, maxPredictions;

    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a tmPose object to your window (window.tmPose)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // Prediction #1: run input through posenet
        // estimatePose can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);

        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }

        // finally draw the poses
        drawPose(pose);
    }

    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }
</script>
```