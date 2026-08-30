---

layout: page
title: "Upper-Limb Rehabilitation Exoskeleton"
description: "Development and FEA optimization of a compact rehabilitation device"
img: "assets/img/Projects/exoskeleton/fiished.jpeg"
importance: 2
tags:

- rehabilitation
- mechanical design
- FEA
- additive manufacturing
- mechatronics

---

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/fiished.jpeg" title="Upper-limb rehabilitation exoskeleton" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Compact upper-limb rehabilitation exoskeleton developed as an engineering project.
</div>

This project focused on the development of a compact **upper-limb rehabilitation exoskeleton** designed to support arm movement during rehabilitation exercises. The goal was to create a lightweight and low-cost device that could assist the user while lifting a load, while remaining compact enough to be adjusted, disassembled and stored easily.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/sketch.png" title="Concept sketch of the exoskeleton" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/freebody.png" title="System free-body diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Initial concept and mechanical analysis of the system.
</div>

## Mechanical concept

The exoskeleton was designed around the elbow joint and uses a compact **capstan-drive mechanism** to support the arm. A two-stage timing belt transmission increases the available torque while keeping the actuator close to the joint, while adjustable rail components allow the structure to adapt to different arm lengths and make the device easier to disassemble for storage.

### Key features

* Compact elbow-support mechanism
* Adjustable geometry for different arm lengths
* Two-stage timing belt transmission
* Capstan-drive mechanism
* Lightweight and modular construction
* Components designed for additive manufacturing

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/capstan.png" title="Capstan drive mechanism" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Capstan-drive mechanism used to support the elbow movement.
</div>

## FEA optimization

My main focus within the project was the **structural optimization of a load-bearing component** of the capstan drive. The part transfers forces between the belt drive, bearings and the forearm structure, so it had to remain strong while also being lightweight and suitable for additive manufacturing.

Using Ansys, the component was analyzed under the expected forces, moments and bearing loads. The resulting stress distribution was used to iteratively improve the geometry by removing material from low-stress regions and reinforcing critical areas, resulting in a more efficient structure without changing the important mechanical interfaces.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/before.png" title="Part before optimization" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/exoskeleton/after.png" title="Part after optimization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Finite element analysis before and after optimization of the component geometry.
</div>

## Outcome

The project combined **mechanical design, force calculations, drivetrain development, finite element analysis and design for additive manufacturing**. It demonstrated how simulation can be used to improve a functional mechanical component before production and how structural design often requires balancing strength, weight, compactness and manufacturability.
