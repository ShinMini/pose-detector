import React, { useState, useCallback, useEffect } from 'react'
import type { FC } from 'react'
import { Image, View, Text, Platform } from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import type { ImageInfo } from 'expo-image-picker'

import * as VideoThumbnails from 'expo-video-thumbnails'

const ImageInfo = styled.Image`
  height: 75%;
  resize-mode: cover;
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`