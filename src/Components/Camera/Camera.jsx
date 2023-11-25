// eslint-disable-next-line no-unused-vars
import React from 'react'
import ml5 from 'ml5'
import Webcam from 'react-webcam'
import { useRef, useEffect, useState } from 'react'
// import testeimg from './Roupas/Chapeus/Touca.png']
import PropTypes from 'prop-types';
import Style from './Camera.module.css'

const Camera = ({ item }) => {
  const [camera, setCamera] = useState(null)

  const webcamRef = useRef(null)
  const canvasRef = useRef(null)
  const ctx = useRef(null)
  const poses = useRef([])
  const animation = useRef(null)

  const modelReadyMl5 = () => {
    const poseNet = ml5.poseNet(webcamRef.current.video, modelReady);
    poseNet.on("pose", gotPoses);

    function modelReady() {
      console.log("model ready");
      poseNet.multiPose(webcamRef.current.video);
    }

    function gotPoses(results) {
      poses.current = results;
    }
  }

  function drawKeypoints() {
    // Loop through all the poses detected
    for (let i = 0; i < poses.current.length; i += 1) {
      // For each pose detected, loop through all the keypoints
      for (let j = 0; j < poses.current[i].pose.keypoints.length; j += 1) {
        let keypoint = poses.current[i].pose.keypoints[j];
        // Only draw an ellipse is the pose probability is bigger than 0.2
        if (keypoint.score > 0.2) {
          ctx.current.beginPath();
          ctx.current.arc(keypoint.position.x, keypoint.position.y, 10, 0, 2 * Math.PI);
          ctx.current.stroke();
        }
      }
    }
  }

  const drawTouca = (image, size) => {
    let mediaX = (poses.current[0].pose.leftEye.x + poses.current[0].pose.rightEye.x + poses.current[0].pose.nose.x) / 3;
    let diferençaX = (poses.current[0].pose.leftEar.x - poses.current[0].pose.rightEar.x) + size
    let diferençaY = (poses.current[0].pose.leftEye.y + poses.current[0].pose.rightEye.y) / 2

    let mediaY = diferençaY - (poses.current[0].pose.nose.y - diferençaY)
    let Touca = new Image(diferençaX, diferençaX);
    Touca.src = image
    ctx.current.drawImage(Touca, (mediaX - (Touca.width / 2)), mediaY - Touca.height, diferençaX, diferençaX)
  }

  const drawCamiseta = (image) => {
    let mediaX = (poses.current[0].pose.leftShoulder.x + poses.current[0].pose.rightShoulder.x + poses.current[0].pose.leftHip.x + poses.current[0].pose.rightHip.x) / 4;
    let mediaY = (poses.current[0].pose.leftShoulder.y + poses.current[0].pose.rightShoulder.y + poses.current[0].pose.leftHip.y + poses.current[0].pose.rightHip.y) / 4;

    let diferençaX = (poses.current[0].pose.leftShoulder.x - poses.current[0].pose.rightShoulder.x) * 3.5
    let diferençaY = (poses.current[0].pose.rightHip.y - poses.current[0].pose.leftShoulder.y) * 1.8

    let Camiseta = new Image(diferençaX, diferençaY)
    Camiseta.src = image;
    ctx.current.drawImage(Camiseta, (mediaX - (Camiseta.width / 2)), (mediaY - (Camiseta.height / 2)), diferençaX, diferençaY);
  }

  const drawOculos = (image) => {
    let mediaX = (poses.current[0].pose.leftEar.x + poses.current[0].pose.rightEar.x + poses.current[0].pose.leftEye.x + poses.current[0].pose.rightEye.x) / 4;
    let mediaY = (poses.current[0].pose.leftEar.y + poses.current[0].pose.rightEar.y + poses.current[0].pose.leftEye.y + poses.current[0].pose.rightEye.y) / 4;

    let diferençaX = (poses.current[0].pose.leftEar.x - poses.current[0].pose.rightEar.x)
    let diferençaY = (poses.current[0].pose.leftEar.x - poses.current[0].pose.rightEar.x) / 2

    let Oculos = new Image(diferençaX, diferençaY)
    Oculos.src = image;
    ctx.current.drawImage(Oculos, (mediaX - (Oculos.width / 2)), (mediaY - (Oculos.height * 0.71)), diferençaX, diferençaY);
  }

  const drawMoletom = (image) => {
    let mediaX = (poses.current[0].pose.leftShoulder.x + poses.current[0].pose.rightShoulder.x + poses.current[0].pose.leftHip.x + poses.current[0].pose.rightHip.x) / 4;
    let mediaY = (poses.current[0].pose.leftShoulder.y + poses.current[0].pose.rightShoulder.y + poses.current[0].pose.leftHip.y + poses.current[0].pose.rightHip.y) / 4;

    let diferençaX = (poses.current[0].pose.leftShoulder.x - poses.current[0].pose.rightShoulder.x) * 2.7;
    let diferençaY = (poses.current[0].pose.rightHip.y - poses.current[0].pose.leftShoulder.y) * 2.0; 

    let Moletom = new Image(diferençaX, diferençaY)
    Moletom.src = image;
    ctx.current.drawImage(Moletom, (mediaX - (Moletom.width / 2)), (mediaY - (Moletom.height / 2)), diferençaX, diferençaY);
  }

  const drawCameraIntoCanvas = () => {
    ctx.current.drawImage(webcamRef.current.video, 0, 0, 1280, 720);
    animation.current = window.requestAnimationFrame(drawCameraIntoCanvas)
    if (poses.current[0] != null)
      drawKeypoints();
    if (item.current.Chapeu)
      drawTouca(item.current.Chapeu.img, item.current.Chapeu.SizeAdjustValue)
    if (item.current.Oculos)
      drawOculos(item.current.Oculos.img)
    if (item.current.Camisa) {
      drawCamiseta(item.current.Camisa.img)
    }
    if (item.current.Moletom) {
      drawMoletom(item.current.Moletom.img)
    }
  }

  const initializatedCamera = () => {
    setCamera(webcamRef.current.video)
    canvasRef.current.width = 1280;
    canvasRef.current.height = 720;
    ctx.current = canvasRef.current.getContext("2d");
    modelReadyMl5();
    drawCameraIntoCanvas();
  }

  return (
    <div className={Style.CameraDiv}>
      <Webcam ref={webcamRef} onUserMedia={initializatedCamera} height={720} width={1280} />
      <canvas ref={canvasRef} />
    </div>
  )
}

Camera.propTypes = {
  item: PropTypes.object
}

export default Camera