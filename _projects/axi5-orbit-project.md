---

layout: page
title: "AXI5 ORBIT - 5-Axis FDM Printer"
description: "Concept, development and realisation of a functional 5-axis FDM printer"
img: "assets/img/Projects/AXI5_ORBIT/title.png"
importance: 1
date: 2026-06-05
tags:

* 5-axis printing
* FDM
* mechatronics
* mechanical design
* firmware

---

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/title.png" title="AXI5 ORBIT prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AXI5 ORBIT — a functional 5-axis FDM printer developed at ZHAW.
</div>

AXI5 ORBIT is a **5-axis FDM printer** developed and built as part of our bachelor thesis at ZHAW.

The project covered the development of the machine from the **initial concept to a fully functional prototype**, combining mechanical design, electronics, control engineering and firmware development into one complete mechatronic system.

In addition to the conventional X, Y and Z movements, the build platform can **tilt around the A-axis and continuously rotate around the C-axis**. This allows the orientation between the nozzle and the printed part to change and creates a platform for experimenting with **multi-axis and non-planar FDM printing**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/cad-kinematics-overview.jpg" title="CAD overview of AXI5 ORBIT" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/prototype-front-view.jpg" title="Realised AXI5 ORBIT prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    From concept and CAD design to the realised prototype.
</div>

## From concept to machine

We developed the **overall concept and architecture of the printer** and carried it through to a fully functional prototype.

This included the kinematic and mechanical concept, CAD design, manufacturing and assembly of the mechanical components, integration of the electronics and motors, and configuration of the complete control system.

We also developed the firmware routines required for homing, probing, gantry alignment and referencing the additional rotary axes.

The final machine is based on a CoreXY structure with an actively moving build platform. The printer is controlled using a Duet 3 system, while Maxon BLDC motors with encoder feedback drive the A- and C-axes.

### Key features

* **5 controlled axes:** X, Y, Z, A and C
* **200 × 200 × 200 mm** linear workspace
* A-axis movement from **-90° to +90°**
* Continuous C-axis rotation
* Encoder-controlled BLDC drives for the rotary axes
* Heated rotating build platform with slip ring
* Automatic homing, probing and gantry alignment
* E3D Revo PZ Probe and non-planar nozzle

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/prototype-front-view.jpg" title="AXI5 ORBIT prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The completed AXI5 ORBIT prototype.
</div>

## Testing the system

After commissioning, all five axes could be controlled individually and in coordinated movements. We tested the homing sequence, positioning of the rotary axes, probing system and temperature control before moving on to the first prints.

These tests also helped identify areas for further development, particularly the positioning accuracy and mechanical behaviour of the A-axis.

## First prints

The printer was first tested using conventional 3-axis printing before attempting a **5-axis demonstration print**.

The 5-axis print showed that extrusion, temperature control, G-code processing and movement of the additional rotary axes could work together within one print process.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/benchy-comparison.jpg" title="Benchy comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/five-axis-demo-print.jpg" title="5-axis demonstration print" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Conventional 3-axis printing and the first 5-axis demonstration print.
</div>

## Further development

After completing the bachelor thesis, we continued improving the printer.

A major focus was the **A-axis drivetrain and position control**. The encoder feedback was moved directly to the axis so that the actual platform position could be measured more accurately. The belt transmission was redesigned using stiffer timing belts and the motor control was retuned for the modified mechanical system.

The firmware and homing routines were also adapted to the new setup, followed by additional movement and print tests.

## Outcome

AXI5 ORBIT became a **functional 5-axis FDM research prototype** and a platform for further development of multi-axis additive manufacturing.

The project covered the complete development process of a complex mechatronic system — from the **initial concept and system architecture through CAD, manufacturing, electronics and firmware to commissioning and the first multi-axis prints**.

---

Developed by **Samuel Benz and Lorenz Limacher** at the ZHAW School of Engineering as part of the bachelor thesis *Development of a Novel 5-Axis FDM Printer* and subsequently developed further.
