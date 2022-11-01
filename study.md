## tensorflow model 전처리 과정

1. 저장된 모델과 가중치값을 불러옴.
2. 이미지를 Tensor 데이터 형식으로 decoding
3. 예측 시작

# 1. 저장된 모델과 가중치 값 불러오기
``` typescript
 await tf.ready();
    // load the trained model
    return await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
```

# 2. 이미지를 Tensor 데이터 형식으로 decoding
``` ts
  const uIntArray = Base64Binary.decode(base64);
    // decode a JPEG-encoded image to a 3D Tensor of dtype
    // 이미지를 3차원 Tensor 모델로 encoding
    const decodedImage = decodeJpeg(uIntArray, 3);

    // reshape Tensor into a 4D array
    // Tensor모델로 encoding된 데이터를 4D Tensor모델로 형변환
    return decodedImage.reshape([
      1,
      BITMAP_DIMENSION,
      BITMAP_DIMENSION,
      TENSORFLOW_CHANNEL,
    ]);
```


# 3. 예측 시작
``` ts
export const startPrediction = async (model, tensor) => {
  try {
    // predict against the model
    const output = await model.predict(tensor);
    // return typed array
    return output.dataSync();
  }
```