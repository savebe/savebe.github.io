---
layout: page
title: "PipeGuard Robotics"
description: "Autonomous pipe inspection robot with real-time video and sensor feedback"
img: "assets/img/Projects/PipeGuerd/inpipe.png"
importance: 2
tags:
  - robotics
  - embedded systems
  - computer vision
  - mechanical design
  - Raspberry Pi
---

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/inpipe.png" title="PipeGuard inside a pipe" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    PipeGuard — a prototype robot for autonomous inspection of industrial pipe systems.
</div>

PipeGuard is a compact **pipe inspection robot** developed for inspecting areas that are difficult, dangerous or time-consuming to access manually. The robot moves through the pipe while providing live video and sensor feedback to the operator. The goal of the project was to build a complete inspection prototype.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/inpipe.png" title="PipeGuard inside a pipe" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/software.png" title="PipeGuard software interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The robot inside the test pipe and the software used for monitoring and control.
</div>

## The robot

PipeGuard uses a compact articulated structure designed to navigate through pipe networks and around tight bends. An adjustable clamping mechanism presses the robot against the pipe wall and allows it to adapt to different pipe diameters, while omnidirectional wheels and rubber elements provide mobility, contact and stability. A camera with integrated lighting provides visibility in dark pipe environments, and the electronic system is based around a Raspberry Pi Zero 2 that handles communication, camera streaming and the higher-level software.

### Key features

* Compact pipe inspection robot
* Adjustable mechanism for different pipe diameters
* Ability to navigate **90° pipe bends**
* Camera with lighting for live visual inspection
* Pressure and temperature sensing
* Raspberry Pi based control system
* Wireless communication and remote access
* Internal logging of inspection data

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/overview.png" title="PipeGuard robot overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of the articulated robot concept for navigating complex pipe paths.
</div>

## Software and control

The software combines **motor control, camera streaming, sensor acquisition, communication and data logging**. The robot communicates over a local wireless network, with commands and status information exchanged through TCP/IP and the camera image streamed as MJPEG video. A basic image-processing approach based on shadow detection was also developed to estimate the direction of the pipe and support autonomous navigation.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/software.png" title="PipeGuard software view" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Software interface for live video, monitoring and robot control.
</div>

## Prototype testing

The prototype was tested in a controlled pipe system to evaluate its mobility and inspection capabilities. PipeGuard successfully travelled through a **90° bend**, was able to climb vertically inside a pipe and provided a live camera feed that allowed visible defects to be identified during operation. The tests also highlighted areas for further development, particularly more robust autonomous navigation and improved mechanical reliability for demanding pipe geometries.

## Outcome

PipeGuard demonstrated the concept of a **mobile robotic pipe inspection system** that combines mechanical design, embedded systems, computer vision, networking and sensor technology in a single working prototype. Future development could extend the platform with more robust autonomous navigation, automatic defect recognition and additional inspection sensors.
