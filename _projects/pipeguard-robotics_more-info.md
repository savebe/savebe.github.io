---
layout: page
title: PipeGuard Robotics
description: Autonomous pipe inspection robot with real-time video and sensor feedback
img: assets/img/Projects/PipeGuerd/inpipe.png
importance: 2
---

PipeGuard Robotics is a prototype for an autonomous inspection robot designed for pipe systems that are difficult, dangerous, or time-consuming to inspect manually. The project was developed around one main idea: instead of sending people into risky or inaccessible areas, a small robot should move through the pipe, collect data, and help detect problems before they lead to expensive failures.

The target application was preventive inspection in industrial pipe networks. Typical problems such as deformation, fractures, corrosion, abrasion, worn joints, blockages, and incorrect pressure regulation can be hard to detect from the outside. PipeGuard was designed as a compact tool to support regular inspections and make pipe monitoring safer and more efficient.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/inpipe.png" title="PipeGuard inside a pipe" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/software.png" title="PipeGuard software view" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    PipeGuard was designed to inspect pipe systems and provide live visual feedback during operation.
</div>

The use case starts with preparing and calibrating the robot, then placing it into a pipe section. During the inspection run, the robot drives through the pipe and collects camera and sensor data. After the run, the collected data can be evaluated to identify possible defects or areas that need maintenance. The goal was not only to build a moving robot, but to create a complete inspection workflow from preparation to data evaluation.

The hardware concept is based on a compact M-shaped robot structure. An adjustable clamping mechanism presses the robot into the pipe and allows it to adapt to different pipe diameters. Rubber straps help with contact and stability, while omnidirectional wheels allow the robot to drive through tight pipe sections and around bends. A camera with LEDs provides visual feedback in dark pipe environments, and the electronics are built around a Raspberry Pi Zero 2.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/PipeGuerd/overview.png" title="PipeGuard robot overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of the articulated robot concept for navigating complex pipe paths.
</div>

One important design feature is the ability to move through tight turning radii. The robot should also adapt to different pipe diameters, which is why the clamping system was a central part of the mechanical design. The camera system was planned for low-light pipe conditions and supports the operator by streaming visual information during the inspection.

On the software side, PipeGuard combines image processing, motor control, communication, data logging, and a user interface. The robot uses shadow detection as a basic navigation approach, helping it recognize the pipe direction and follow the path. Communication is handled over a local network hotspot. The Raspberry Pi can be maintained through SSH, motor commands and status updates are exchanged over TCP/IP, and the camera image is streamed as MJPEG video.

PipeGuard combines multiple inspection functions in one system. The camera module provides real-time visuals, while pressure and temperature sensors monitor the internal pipe conditions. The inspection data is stored on an internal SD card and can be viewed through the live feed or exported after the run for documentation.

The prototype was tested in a controlled pipe environment. The main tests focused on whether the robot could drive around a 90° bend, how steep it could climb, and whether visible defects such as holes could be detected through the camera feed. During testing, the robot successfully navigated a 90° bend without losing connection or stalling the motors. It was also able to climb a vertical pipe, although driving through a 90° bend directly after a vertical climb remained a limitation. Visual defects could be detected over the live feed with a human operator.

Risk analysis was also part of the project. Important risks included insufficient clamping inside the pipe, battery or connection failures caused by vibration, incorrect path recognition by the software, and mechanical failure of the wheel drive gears. Mitigations included an adjustable clamping force, locking brackets, mechanical guard rails, testing the algorithm on varied paths, stress simulations, and printing critical gears with 100% infill.

The final result was a working prototype that demonstrated the core idea of autonomous pipe inspection. It combined mechanical design, embedded control, image processing, real-time communication, and sensor-based inspection. Future improvements would focus on more robust autonomous navigation, improved failure detection, additional sensors, stronger drivetrain components, and a standalone application for easier operation.
