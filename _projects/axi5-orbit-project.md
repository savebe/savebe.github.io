---
layout: page
title: AXI5 ORBIT - 5-Axis FDM Printer
description: A functional 5-axis FDM printer prototype — CAD, mechatronics, firmware and validation (bachelor thesis)
img: assets/img/Projects/AXI5_ORBIT/title.png
importance: 1
date: 2026-06-05
tags: [5-axis printing, FDM, mechatronics, mechanical design, firmware]
---

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/title.png" title="AXI5 ORBIT prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    AXI5 ORBIT — a compact 5-axis FDM printer built as a bachelor thesis prototype.
</div>

AXI5 ORBIT is a compact 5-axis FDM printer built as a functional bachelor thesis prototype. The project started from an earlier mechanical, electrical and software concept and focused on turning it into a real machine: revising the CAD, manufacturing and assembling the mechanical parts, wiring the electronics, configuring the firmware and validating the complete system with structured tests.

The goal was not just to add two extra axes to a printer, but to create a working platform for multi-axis additive manufacturing. By combining the normal X, Y and Z movements with a tilting A-axis and a continuously rotating C-axis build platform, the printer can change the orientation between nozzle and part during printing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/cad-kinematics-overview.jpg" title="CAD overview of the 5-axis kinematics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAD overview of the 5-axis kinematics.
</div>

## What we built

The final prototype is based on a Voron-style CoreXY structure with an actively moving build platform. The print bed can rotate around the C-axis and tilt around the A-axis, while the printhead remains compact and lightweight. The mechanical design uses a mix of aluminium, SLS PA12 and FDM-printed parts to balance stiffness, weight and manufacturability.

The electrical system is built around a Duet 3 6HC controller, a Duet 3 Roto Toolboard on the printhead and Duet 3 1XD expansion boards for the rotary axes. The A- and C-axis are driven by Maxon BLDC motors with EPOS2 70/10 motor controllers and encoder feedback. RepRapFirmware was configured and extended with custom macros for homing, probing, bed alignment and rotary-axis referencing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/prototype-front-view.jpg" title="Realised AXI5 ORBIT prototype" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The realised AXI5 ORBIT prototype.
</div>

## Key technical points

- 5-axis setup: X, Y, Z plus A-axis tilt and continuous C-axis rotation
- Linear workspace: 200 x 200 x 200 mm
- Control system: Duet 3 6HC with RepRapFirmware and Duet Web Control
- Rotary drives: Maxon BLDC motors with EPOS2 controllers and MILE encoder feedback
- Toolhead: lightweight direct-drive printhead with E3D Revo PZ Probe and non-planar nozzle
- Homing concept: multi-stage sequence using sensorless rough homing and probe-based fine referencing
- Bed system: heated rotating build plate with slip ring for continuous C-axis rotation

## Validation and results

After commissioning, all five axes could be moved individually and in combined movements. The complete homing sequence was successfully executed in all five test runs. The PZ Probe showed good repeatability in Z, while side probing was less repeatable at some measurement points.

The A-axis reached the required range from -90° to +90°, but showed a maximum measured angular deviation of 1.77°. The C-axis performed better, with deviations between about -0.24° and +0.18° over 0° to 360°, and no increasing drift after multiple full rotations.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/a-axis-angle-error.jpg" title="A-axis angle deviation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/thermal-behaviour.jpg" title="Thermal behaviour of bed and nozzle" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: measured A-axis angle deviation. Right: thermal behaviour of the bed and nozzle.
</div>

Thermal testing showed that the bed and nozzle reached their target temperatures and could run for 60 minutes. The nozzle stayed stable around its setpoint, while the bed showed a visible periodic temperature fluctuation.

The printer completed a conventional 3-axis Benchy print and a first 5-axis demonstration print. The 3-axis print was usable but showed more stringing and slightly weaker overhangs than the Voron reference print. The 5-axis demonstration confirmed that extrusion, temperature control, G-code processing and the additional rotary-axis motions can work together in one print process.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/benchy-comparison.jpg" title="Benchy comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Projects/AXI5_ORBIT/five-axis-demo-print.jpg" title="5-axis demonstration print" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Benchy comparison against the Voron reference. Right: the first 5-axis demonstration print.
</div>

## Outcome

AXI5 ORBIT was successfully realised as a functional 5-axis FDM printer prototype. The project proves that the mechanical, electrical and software subsystems can work together as one machine and that the additional rotary axes can be included in real print movements.

At the same time, the tests showed clear next steps: improving the A-axis accuracy, reducing vibrations of the tilting bed structure, tuning the heated bed control and developing a complete process chain for true 5-axis toolpaths. The prototype therefore forms a strong base for further work on non-planar and multi-axis FDM printing.

---

Images and project information are based on the bachelor thesis report _Bau eines neuartigen 5-Achs-FDM-Druckers_ by Samuel Benz and Lorenz Limacher, ZHAW School of Engineering, 05.06.2026.
